import * as mongoose from 'mongoose';
import config from '../../../../config/config';
import obtenerConexion from '../../../../config/connectionsFactory';
import obtenerModelo from '../../../../config/modelsFactory';

const tiposEstatusSchema = new mongoose.Schema({
    //CR: Tipos_Estatus (colección)
    IdTipoEstatusOK: {type : String, required : true},
    IdTipoEstatusBK: {type : String},
    DesTipoEstatus: {type : String},
    // CR: Estatus del Registro (subdocumento)  
    detail_row: {
        _id: false,
        Activo: {type : String, default : 'S'},
        Borrado: {type : String, default : 'N'},
        detail_row_reg: [
            {
                _id: false,
                FechaReg: {type : Date, default: Date.now},
                UsuarioReg: {type : String}
            }
        ]
    },
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
 //console.log("FIC: ----------------------------",conn);
 let model = obtenerModelo('cat_tipos_estatus', tiposEstatusSchema, conn, dbName, dbCluster);
 //console.log("FIC: ----------M O D E L   YA   E X I S T E------------------",model);
 export default model;

 /*//CR: Exportación al modelo
 export default mongoose.model(
     'cat_tipos_estatus',
     tiposEstatusSchema,
     'cat_tipos_estatus',
);*/
