import * as mongoose from 'mongoose';
import config from '../../../../config/config';
import obtenerConexion from '../../../../config/connectionsFactory';
import obtenerModelo from '../../../../config/modelsFactory';

const ordersSchema = new mongoose.Schema({
    
    IdOrdenOK           :{ type : String, required : true },
    IdOrdenBK           :{ type : String },
    IdTipoOrdenOK       :{ type : String },
    TipoOrden           :{ type : String },
    IdRolOK             :{ type : String },
    IdPersonaOK         :{ type : String },
    cat_ordenes_estatus :[
        {
            IdEstatusOK :{ type : String },
            Estatus     :{ type : String },
            Actual      :{ type : String },
            Observacion :{ type : String },
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

    ordenes_info_ad: [
        {
            IdEtiquetaOK      :{ type : String },
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

    ordenes_presenta_ps:[
        {
            IdProdServOK    :{ type : String },
            IdPresentaPSBK  :{ type : String },
            DesPresentaPS   :{ type : String },
            Cantidad        :{ type : Number },
            PrecioUniSinIVA :{ type : Number }, //:{ type : Double },
            PrecioUniConIVA :{ type : Number }, //:{ type : Double },
            PorcentajeIVA   :{ type : Number },
            MontoUniIVA     :{ type : Number }, //:{ type : Double },
            SubTotalSinIVA  :{ type : Number }, //:{ type : Double },
            SubTotalConIVA  :{ type : Number }, //:{ type : Double },
            cat_ordenes_presenta_ps_estatus : [
                {
                    IdEstatusOK: { type : String},
                    Estatus:     { type : String},
                    Actual:      { type : String},
                    Observacion: { type : String},
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
            ordenes_presenta_ps_info_ad: [
                {
                    
                }
            ],
            ordenes_presenta_ps_paq: [
                {
                    
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
    ],
    ordenes_forma_pago: [
        {
            IdTipoPagoOk:    { type: String},
            TipoPago:        { type: String},
            MontoPagado:     { type: Number},
            MontoRecibido:   { type: Number},
            MontoDevuelto:   { type: Number},
            ordenes_info_ad: [
                {
                    IdEtiquetaOK:  { type: String},
                    Etiqueta:    { type: String},
                    Valor:       { type: String},
                    IdSeccionOK: { type: String},
                    Seccion:     { type: String},
                    Secuencia:   { type: Number},
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
})

let conn = obtenerConexion(config.DATABASE_COMMERCE, config.CLUSTER_COMMERCE);
let model = obtenerModelo('ordenes', ordersSchema, conn, config.DATABASE_COMMERCE, config.CLUSTER_COMMERCE);
export default model;