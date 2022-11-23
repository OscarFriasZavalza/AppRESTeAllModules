import * as mongoose from 'mongoose';
import config from '../../../../config/config';
import obtenerConexion from '../../../../config/connectionsFactory';
import obtenerModelo from '../../../../config/modelsFactory';

const usuarioSchema = new mongoose.Schema({
    //CR: Usuarios (colección)
    IdUsuarioOK: {type : String, required : true},
    IdUsuarioBK: {type : String},
    IdPersonaOK: {type : String},
    IdPersonaBK: {type : String},
    Usuario: {type : String},
    Expira: {type : String},
    Conectado: {type : String},
    NumIntentos: {type : Number},
    Token: {type : String},
    //CR: Expira_Claves (subdocumento)
    cat_usuarios_expira_claves: [
       {
            Clave: {type : String},
            FechaExpiraIni: {type : Date},
            FechaExpiraFin: {type : Date},
            Actual: {type : String},
            ClaveAutoSys: {type : String},
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
            }
        },
    ],
    //CR: Estatus (subdocumento)
    cat_usuarios_estatus: [
        {
            IdEstatusOK: {type : String},
            Estatus: {type : String},
            Actual: {type : String},
            Observacion: {type : String},
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
            }
        },
    ],
    //CR: Roles (subdocumento)
    cat_usuarios_roles: [
        {
            IdInstitutoOK: {type : String},
            IdNegocioOK: {type : String},
            IdRolOK: {type : String},
            Principal: {type : String},
            Actual: {type : String},
            cat_usuarios_roles_info_adicional: [{
                IdEtiquetaOK: {type : String},
                Etiqueta: {type : String},
                Valor: {type : String},
                IdSeccionOK: {type : String},
                Seccion: {type : String},
                Secuencia: {type : Number},
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
                }
            }],
            cat_usuarios_roles_archivos: [{
                IdArchivoBK: {type : String},
                DesArchivo: {type : String},
                RutaArchivo: {type : String},
                IdTipoArchivoOK: {type : String},
                TipoArchivo: {type : String},
                ISeccionOK: {type : String},
                Seccion: {type : String},
                Secuencia:{type : Number},
                Principal: {type : String},   
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
                }
            }],
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
            }
        },
    ],
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
let model = obtenerModelo('cat_usuarios', usuarioSchema, conn, dbName, dbCluster);
//console.log("FIC: ----------M O D E L   YA   E X I S T E------------------",model);
export default model;

 /*//CR: Exportación al modelo
 export default mongoose.model(
     'cat_usuarios',
     usuarioSchema,
     'cat_usuarios',
);
*/
