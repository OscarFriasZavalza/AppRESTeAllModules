import * as mongoose from 'mongoose';
import config from '../../../../config/config';
import obtenerConexion from '../../../../config/connectionsFactory';
import obtenerModelo from '../../../../config/modelsFactory';

const almacenesSchema = new mongoose.Schema({
    
    IdInstitutoOK       :{type : String, required : true},
    IdAlmacenOK         :{type : String},
    IdAlmacenBK         :{type : String},
    DesAlmacen          :{type : String},
    almacenes_negocios    :[
                {
                    _id : false,
                    IdNegocioOk :{type : String}
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
let model = obtenerModelo('almacenes', almacenesSchema, conn, config.DATABASE_COMMERCE, config.CLUSTER_COMMERCE);
export default model;