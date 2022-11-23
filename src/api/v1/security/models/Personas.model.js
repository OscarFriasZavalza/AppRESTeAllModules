import * as mongoose from 'mongoose';
import config from '../../../../config/config';
import obtenerConexion from '../../../../config/connectionsFactory';
import obtenerModelo from '../../../../config/modelsFactory';

const personasSchema = new mongoose.Schema({
    //EGRM : Personas Colección
    IdPersonaOK: { type : String, required : true },
    IdPersonaBK: { type : String },
    Nombre: { type : String },
    ApPaterno: { type : String },
    ApMaterno: { type : String },
    FechaNac: { type : Date },
    RFC: { type : String },
    CURP: { type : String },
    IdTipoPersonaOK: { type : String },
    TipoPersona: { type : String },
    Sexo: { type : String },
    Alias: { type : String },
    cat_personas_dir_webs : [
        {
            DesDirWeb       : { type : String },
            DireccionWeb    : { type : String },
            IdTipoDirWebOk  : { type : String },
            TipoDirWeb      : { type : String },
            Principal       : { type : String },
            detail_row : {
                _id : false,
                Activo  : { type : String, default : 'S' },
                Borrado : { type : String, default : 'N' },
                detail_row_reg : [
                    {
                        _id : false,
                        FechaReg : { type : Date, default : Date.now() },
                        UsuarioReg : { type : String }
                    }
                ]
            }
        }
    ],
    cat_personas_telefonos : [
        {
            DesTelefono       : { type : String },
            CodPais           : { type : String },
            NumTelefono       : { type : String },
            NumExtension      : { type : String },
            Principal         : { type : String },
            IdTipoTelefonoOK  : { type : String },
            TipoTelefono      : { type : String },
            detail_row : {
                _id : false,
                Activo  : { type : String, default : 'S' },
                Borrado : { type : String, default : 'N' },
                detail_row_reg : [
                    {
                        _id : false,
                        FechaReg : { type : Date, default : Date.now() },
                        UsuarioReg : { type : String }
                    }
                ]
            }
        }
    ],
    cat_personas_domicilios : [
        {
            IdDomicilioBK     : { type : String },
            "Calle Numero"       : { type : String },
            "Entre Calle 1"       : { type : String },
            "Entre Calle 2"       : { type : String },
            Referencia        : { type : String },
            CodPostal         : { type : String },
            CoordenadasXY     : { type : String },
            IdTipoDomicilioOK : { type : String },
            TipoDomicilio     : { type : String },
            Pais              : { type : String },
            Estado            : { type : String },
            Municipio         : { type : String },
            Localidad         : { type : String },
            Colonia           : { type : String },
            detail_row : {
                _id : false,
                Activo  : { type : String, default : 'S' },
                Borrado : { type : String, default : 'N' },
                detail_row_reg : [
                    {
                        _id : false,
                        FechaReg : { type : Date, default : Date.now() },
                        UsuarioReg : { type : String }
                    }
                ]
            }
        }
    ],
    personas_info_adicional : [
        {
            IdEtiquetaOK  : { type : String },
            Etiqueta      : { type : String },
            Valor         : { type : String },
            IdSeccionOK   : { type : String },
            Seccion       : { type : String },
            Secuencia     : { type : Number },
            detail_row : {
                _id : false,
                Activo  : { type : String, default : 'S' },
                Borrado : { type : String, default : 'N' },
                detail_row_reg : [
                    {
                        _id : false,
                        FechaReg : { type : Date, default : Date.now() },
                        UsuarioReg : { type : String }
                    }
                ]
            }
        }
    ],
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
let model = obtenerModelo('cat_personas', personasSchema, conn, dbName, dbCluster);

export default model;
