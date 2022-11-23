import * as mongoose from 'mongoose';
import config from '../../../../config/config';
import obtenerConexion from '../../../../config/connectionsFactory';
import obtenerModelo from '../../../../config/modelsFactory';

const inventariosSchema = new mongoose.Schema({
    
    IdInstitutoOK       :{type : String, required : true},
    IdAlmacenOK         :{type : String},
    IdProdServOK        :{type : String},
    IdPresentaBK        :{type : String},
    ControlaSerie       :{type : String},
    inventarios_info_ad :[
        {
            IdEtiqueta  :{type : String},
            Etiqueta    :{type : String},
            Valor       :{type : String},
            IdSeccionOK :{type : String},
            Secuencia   :{type : Number},
            detail_row  :{
                Activo  :{type : String, default : 'S'},
                Borrado :{type : String, default : 'N'},
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

    inventarios_movtos  :[
        {
            CantidadMovto   :{type : Number},
            CantidadAnt     :{type : Number},
            CantidadAct     :{type : Number},
            IdTipoMovtoOK   :{type: String},
            IdClaseMovtoOK  :{type: String},
            Referencia      :{type: String},
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

    inventarios_series  :[
        {
            Serie       :{type: String},
            Placa       :{type: String},
            Observacion :{type: String},
            inventarios_series_estatus_f    :[
                {
                    IdEstatusOK :{type : String},
                    Estatus     :{type : String},
                    Actual      :{type : String, default : 'S'},
                    Observacion  :{type : String},
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

            inventarios_series_estatus_v    :[
                {
                    IdEstatusOK :{type : String},
                    Estatus     :{type : String},
                    Actual      :{type : String, default : 'S'},
                    Observacion  :{type : String},
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

            inventarios_serie_info_ad   :[
                {}
            ],

            inventarios_series_ubicacion    :[
                {
                    Ubicacion   :{type : String},
                    Actual      :{type : String, default : 'S'},
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
let model = obtenerModelo('inventarios', inventariosSchema, conn, config.DATABASE_COMMERCE, config.CLUSTER_COMMERCE);
export default model;