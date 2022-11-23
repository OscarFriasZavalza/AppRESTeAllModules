import * as mongoose from 'mongoose';
import config from '../../../../config/config';
import obtenerConexion from '../../../../config/connectionsFactory';
import obtenerModelo from '../../../../config/modelsFactory';

const gruposSchema = new mongoose.Schema({
    //JGZ: Grupos colección
    IdGrupoPK        : { type : Number, required : true },
    IdGrupoOK        : { type : String },
    IdGrupoBK        : { type : String },
    IdPeriodoOK      : { type : String },
    IdInstitutoOK    : { type : String },
    IdCarreraOK      : { type : String },
    IdProgramaOK     : { type : String },
    IdReticulaOK     : { type : String },
    IdAsignaturaOK   : { type : String },
    IdPersonaOK      : { type : String },
    IdRolOK          : { type : String },
    Grupo            : { type : String },
    Capacidad        : { type : Number },
    IdTipoCursoOK    : { type : String },
    IdCursoOK        : { type : String },
    Curso            : { type : String },
    IdTipoGradoAcaOK : { type : String },
    IdGradoAcaOK     : { type : String },
    GradoAca         : { type : String },
    IdTipoHorarioOK  : { type : String },
    IdHorarioOK      : { type : String },
    Horario          : { type : String },
    grupos_estatus : [
        {
            IdTipoEstatusOK : { type : String },
            IdEstatusOK     : { type : String },
            Estatus         : { type : String },
            Actual          : { type : String },
            Observacion     : { type : String }, 
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
    grupos_horarios : [
        {
            IdDiaOK           : { type : String },
            IdEstatusBK       : { type : String },
            Dia               : { type : String },
            Alias             : { type : String },
            HoraEntrada       : { type : String },
            HoraSalida        : { type : String },
            ToleranciaEntrada : { type : Number },
            ToleranciaSalida  : { type : Number },
            IdEdificioOK      : { type : String }, 
            IdEspacioOK       : { type : String },
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
    grupos_personas : [
        {
            IdPersonaOK : { type : String },
            IdRolOK     : { type : String },
            NumPeriodo  : { type : Number },
            Repite      : { type : String },
            detail_row : {
                _id : false,
                Activo : { type : String, default : 'S' },
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
});

let conn = obtenerConexion(config.DATABASE_EDUCATION, config.CLUSTER_EDUCATION);
let model = obtenerModelo('grupos', gruposSchema, conn, config.DATABASE_EDUCATION, config.CLUSTER_EDUCATION);

export default model;

/* //JGZ: Exportamos el modelo
export default mongoose.model(
    'grupos',
    gruposSchema,
    'grupos'
);

 */