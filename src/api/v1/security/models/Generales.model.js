import * as mongoose from 'mongoose';
import config from '../../../../config/config';
import obtenerConexion from '../../../../config/connectionsFactory';
import obtenerModelo from '../../../../config/modelsFactory';

const catGeneralesSchema = new mongoose.Schema({
    IdGenOk: { type : String, required : true },
    IdGenBK: { type : String },
    IdTipoGenOK: { type : String },
    DesGeneral: { type : String },
    IdAgrupa: { type : String },
    detail_row: {
        _id: false,
        Activo: {type : String, default : 'S'},
        Borrado: {type : String, default : 'N'},
        detail_row_reg : [
            {
                _id: false,
                FechaReg: {type : Date, default : Date.now() },
                Usuario: {type : String }
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
 let model = obtenerModelo('cat_generales', catGeneralesSchema, conn, dbName, dbCluster);
 
 export default model;