import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
//FIC: imports Swagger

//FIC: Config para variables de entorno
import config from './config/config';

//FIC: imports Routes
import routeAPIeSecurity from './api/v1/security/routes/index';
import routeAPIeEducation from './api/v1/education/routes/index';
import routeAPIeCommerce from './api/v1/commerce/routes/index';

//FIC: imports Middlewares


//FIC: Declaramos la variable app igualandola a express
const app = express();

//FIC: Establece la conexion a la BD 
//import { dbSecurityConnection, dbEducationConnection } from './config/database.config';
//dbSecurityConnection();
//dbEducationConnection();

//FIC: Settings
app.set('port', config.PORT);
//FIC: Middlewares generales
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//FIC: Routes
const api = config.API_URL;

//debugger;

//console.log("FIC: app ->", api );

app.get(`${api}`, (req,res)=>{
    res.send(
        `<h1>RESTful running in root</h1> <p> eEducation: <b>${api}/api-docs</b> for more information.</p>`
    );
})
app.get('/DrFIC', (req,res)=>{
    res.send(
        `<h1>RESTful running in JGZ</h1> <p> eEducation: <b>${api}/api-docs</b> for more information.</p>`
    );
})
// Routes
routeAPIeSecurity(app);
routeAPIeEducation(app);
routeAPIeCommerce(app);


// Swagger Docs
// Middleware para el manejo de errores
// Export App
export default app;