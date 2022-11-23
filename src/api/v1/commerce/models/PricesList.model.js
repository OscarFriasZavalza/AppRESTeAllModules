import * as mongoose from 'mongoose';
import config from '../../../../config/config';
import obtenerConexion from '../../../../config/connectionsFactory';
import obtenerModelo from '../../../../config/modelsFactory';

const pricesListSchema = new mongoose.Schema({
    
    IdListaOK           :{ type : String, required : true },
    IdInstitutoOK       :{ type : String },
    DesLista            :{ type : String },
    FechaExpiraIni      :{ type : Date },
    FechaExpiraFin      :{ type : Date },
    IdTipoListaOK       :{ type : String },
    TipoLista           :{ type : String },
    Formula             :{ type : String },
    cat_listas_presenta_precios :[
        {
            IdProdServOK :{ type : String },
            IdPresentaBK :{ type : String },
            Precio       :{ type : Number },
            detail_row : {
                _id : false,
                Activo  :{ type : String, default : 'S' },
                Borrado :{ type : String, default : 'N' },
                detail_row_reg : [
                    {
                        _id : false,
                        FechaReg    :{ type : Date, default : Date.now() },
                        UsuarioReg  :{ type : String }
                    }
                ]
            }
        },

    ],

    cat_listas_roles: [
        {
            IdEtiqueta      :{ type : String },
            Etiqueta        :{ type : String },
            Valores         :[
                {
                    valor           :{ type : String },
                    IdCompraValor   :{ type : String },
                }
            ],
            IdOpComparaValores     :{ type : String },
            IdOpLogicoEtiqueta     :{ type : String },
            Expira                 :{ type : String },
            FechaExpiraIni         :{ type : Date },
            FechaExpiraFin         :{ type : Date },
            detail_row : {
                _id : false,
                Activo  :{ type : String, default : 'S' },
                Borrado :{ type : String, default : 'N' },
                detail_row_reg : [
                    {
                        _id : false,
                        FechaReg    :{ type : Date, default : Date.now() },
                        UsuarioReg  :{ type : String }
                    }
                ]
            }
        }
    ],

    cat_listas_promos:[
        {
               
        }
    ],

    cat_listas_negocios: [
        {
            IdNegocioOK     :{ type: String},
            detail_row      :{
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

let connection = obtenerConexion(config.DATABASE_COMMERCE, config.CLUSTER_COMMERCE);
let model = obtenerModelo('cat_listas', pricesListSchema, connection, config.DATABASE_COMMERCE, config.CLUSTER_COMMERCE);
export default model;