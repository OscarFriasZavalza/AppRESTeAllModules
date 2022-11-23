import * as mongoose from 'mongoose';
import config from '../../../../config/config';
import obtenerConexion from '../../../../config/connectionsFactory';
import obtenerModelo from '../../../../config/modelsFactory';

const productsSchema = new mongoose.Schema({
    IdProdServOK            :{ type : String, required : true},
    IdInstitutoOK           :{ type : String },
    IdProdServBK            :{ type : Number },
    CodigoBarras            :{ type : String },
    DesProdServ             :{ type : String },
    cat_prod_serv_info_ad : [
        {
            _id: false,
            IdEtiqueta      :{ type : String },
            Etiqueta        :{ type : String },
            Valor           :{ type : String },
            IdSeccionOK     :{ type : String },
            Seccion         :{ type : String },
            Secuencia       :{ type : Number },
            detail_row : {
                _id : false,
                Activo  : { type : String, default : 'S' },
                Borrado : { type : String, default : 'N' },
                detail_row_reg : [
                    {
                        _id : false,
                        FechaReg    : { type : Date, default : Date.now() },
                        UsuarioReg  : { type : String }
                    }
                ]
            }
        }
    ],
    cat_prod_serv_presenta : [
        {
            _id: false,
            IdPresentaBK        :{ type : String },
            DesPresenta         :{ type : String },
            cat_prod_serv_presenta_estatus : [
                {
                    _id: false,
                    IdEstatusOK     :{ type : String },
                    Estatus         :{ type : String },
                    Actual          :{ type : String },
                    Observacion     :{ type : String },
                    detail_row : {
                        _id : false,
                        Activo  : { type : String, default : 'S' },
                        Borrado : { type : String, default : 'N' },
                        detail_row_reg : [
                            {
                                _id : false,
                                FechaReg    : { type : Date, default : Date.now() },
                                UsuarioReg  : { type : String }
                            }
                        ]
                    }
                }
            ],
            cat_prod_serv_presenta_info_ad : [
                {
                    _id: false,
                    IdEtiqueta      :{ type : String },
                    Etiqueta        :{ type : String },
                    Valor           :{ type : String },
                    IdSeccionOK     :{ type : String },
                    Seccion         :{ type : String },
                    Secuencia       :{ type : Number },
                    detail_row : {
                        _id : false,
                        Activo  : { type : String, default : 'S' },
                        Borrado : { type : String, default : 'N' },
                        detail_row_reg : [
                            {
                                _id : false,
                                FechaReg    : { type : Date, default : Date.now() },
                                UsuarioReg  : { type : String }
                            }
                        ]
                    }
                }
            ],
            cat_prod_serv_archivos : [
                {
                    _id: false,
                    IdArchivoBK         :{ type : String },
                    DesArchivo          :{ type : String },
                    RutaArchivo         :{ type : String },
                    IdTipoArchivoOK     :{ type : String },
                    TipoArchivo         :{ type : String },
                    IdSeccionOK         :{ type : String },
                    Seccion             :{ type : String },
                    Secuencia           :{ type : Number },
                    Principal           :{ type : String },
                    detail_row : {
                        _id : false,
                        Activo  : { type : String, default : 'S' },
                        Borrado : { type : String, default : 'N' },
                        detail_row_reg : [
                            {
                                _id : false,
                                FechaReg    : { type : Date, default : Date.now() },
                                UsuarioReg  : { type : String }
                            }
                        ]
                    }
                }
            ],
            cat_prod_serv_paquetes : [
                {
                    _id: false,
                    IdPresentaBK        :{ type : String },
                    DesPresenta         :{ type : String },
                    Cantidad            :{ type : Number },
                    detail_row : {
                        _id : false,
                        Activo  : { type : String, default : 'S' },
                        Borrado : { type : String, default : 'N' },
                        detail_row_reg : [
                            {
                                _id : false,
                                FechaReg    : { type : Date, default : Date.now() },
                                UsuarioReg  : { type : String }
                            }
                        ]
                    }
                }
            ],
            detail_row : {
                _id : false,
                Activo  : { type : String, default : 'S' },
                Borrado : { type : String, default : 'N' },
                detail_row_reg : [
                    {
                        _id : false,
                        FechaReg    : { type : Date, default : Date.now() },
                        UsuarioReg  : { type : String }
                    }
                ]
            }
        }
    ]
})

let conn = obtenerConexion(config.DATABASE_COMMERCE, config.CLUSTER_COMMERCE);
let model = obtenerModelo('productos', productsSchema, conn, config.DATABASE_COMMERCE, config.CLUSTER_COMMERCE);
export default model;