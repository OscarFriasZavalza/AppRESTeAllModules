import * as mongoose from 'mongoose';
import config from '../../../../config/config';
import obtenerConexion from '../../../../config/connectionsFactory';
import obtenerModelo from '../../../../config/modelsFactory';

const catProdServSchema = new mongoose.Schema({
    
    IdInstitutoOK       :{type : String, required : true},
    IdProdServOK        :{type : String},
    IdProdServBK        :{type : String},
    CodigoBarras        :{type : String},
    DesProdServ         :{type : String},
    cat_prod_serv_estatus :{type : Array},
    cat_prod_serv_info_ad :{type : Array},
    cat_prod_serv_presenta :{type : Array},
    cat_prod_serv_negocios :{type : Array},
    detail_row : {
        Activo  : { type : String, default : 'S' },
        Borrado : { type : String, default : 'N' },
        detail_row_reg : [
            {
                FechaReg    : { type : Date, default : Date.now() },
                UsuarioReg  : { type : String }
            }
        ]
    }
})    

// Precios segun usuario
const pricesListSchema = new mongoose.Schema({
    
    IdListaOK           :{ type : String, required : true },
    IdInstitutoOK       :{ type : String },
    DesLista            :{ type : String },
    FechaExpiraIni      :{ type : Date },
    FechaExpiraFin      :{ type : Date },
    IdTipoListaOK       :{ type : String },
    TipoLista           :{ type : String },
    Formula             :{ type : String },
    cat_listas_presenta_precios :{type : Array},
    cat_listas_roles    :{type : Array},
    cat_listas_promos   :{type : Array}, 
    cat_listas_negocios :{type : Array},
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
let model = obtenerModelo('cat_prod_serv', catProdServSchema, conn, config.DATABASE_COMMERCE, config.CLUSTER_COMMERCE);
export default model;

