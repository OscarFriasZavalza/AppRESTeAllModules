import * as mongoose from 'mongoose';
import obtenerConexion from '../../../../config/connectionsFactory';
import obtenerModelo from '../../../../config/modelsFactory';
import config from '../../../../config/config';

const periodosSchema = new mongoose.Schema({
    IdPeriodoPK: {
        type : String,
        required : true,
    },
    IdPeriodoOK: {
        type : String,
    },
    IdPeriodoBK: {
        type : String,
    },
    IdInstitutoOK: {
        type : Number,
    },
    DesPeriodo: {
        type : String,
    },
    NombreCorto: {
        type : String,
    },
    IdTipoCicloOK: {
        type : String,
    },
    IdClicloOK: {
        type : String,
    },
    Ciclo: {
        type : String,
    },
    Año: {
        type : Number,
    },
    NumPeriodo: {
        type : String,
    },
    IdTipoGradoAcaOK: {
        type : String,
    },
    IdGradoAcaOK: {
        type : String,
    },
    GradoAca: {
        type : String,
    },
    IdTipoModalidadOK: {
        type : String,
    },
    IdModalidadOK: {
        type : String,
    },
    Modalidad: {
        type : String,
    },
    cat_periodos_estatus: [
       {
        IdTipoEstatusOK: {
            type : String,
        },
        IdEstatusOK: {
            type : String,
        },
        Estatus: {
          type : String,
        },
        Actual: {
          type : String,
        },
        Observacion: {
          type : String,
        },
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
    FechaInicial: {
        type : String,
    },
    FechaFinal: {
        type : String,
    }
 });


 let conn = obtenerConexion(config.DATABASE_EDUCATION, config.CLUSTER_EDUCATION );
let model = obtenerModelo('cat_periodos', periodosSchema, conn, config.DATABASE_EDUCATION, config.CLUSTER_EDUCATION);

export default model;
