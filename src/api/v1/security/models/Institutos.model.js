
import * as mongoose from 'mongoose';
import config from '../../../../config/config';
import obtenerConexion from '../../../../config/connectionsFactory';
import obtenerModelo from '../../../../config/modelsFactory';

const institutosSchema = new mongoose.Schema({
    //FIC: Institutos (colección)
    IdInstitutoOK    : { type : String, required : true },
    IdInstitutoBK    : { type : String },
    IdInstitutoSupOK : { type : String },
    DesInstituto     : { type : String }, 
    Alias            : { type : String },
    Matriz           : { type : String }, 
    IdGiroOK         : { type : String }, 
    Giro             : { type : String },
    //FIC: Estatus del Registro (subdocumento)
    detail_row : {
        _id: false,
        Activo  : { type : String, default : 'S' },
        Borrado : { type : String, default : 'N' },
        detail_row_reg : [
            {
                _id: false,
                FechaReg   : { type : Date, default : Date.now() },
                UsuarioReg : { type : String }
            }
        ]
    }
});

let dbName = '';
let dbCluster = '';
//console.log("FIC: -----> ACTIVE SECURITY MODULE ->", config.ACTIVE_SECURITY_MODULE);

switch (config.ACTIVE_SECURITY_MODULE) {
    case 'EDUCATION':
         dbName = config.DATABASE_SECURITY;
         dbCluster = config.CLUSTER_SECURITY_EDUCATION;
         break;
    case 'COMMERCE':
         dbName = config.DATABASE_SECURITY;
         dbCluster = config.CLUSTER_SECURITY_COMMERCE;
         break;
    default:
        break;
}

let conn = obtenerConexion(dbName, dbCluster);
//console.log("FIC: -------------------CONEXION ---------",conn);
let model = obtenerModelo('cat_institutos', institutosSchema, conn, dbName, dbCluster);
//console.log("FIC: ----------M O D E L   YA   E X I S T E------------------",model);
export default model;

/* //FIC: Exportamos el modelo
export default mongoose.model(
    'cat_institutos',
    institutosSchema,
    'cat_institutos'
);
 */