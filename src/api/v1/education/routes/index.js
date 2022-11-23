import { Router } from 'express'; 
import config from '../../../../config/config';
// Import Routes 
import GruposRoutes from './Grupos.route';
import PeriodosRoutes from './Periodos.route';

const routerAPIeEducation = (app) => { 

    const router = Router(); 
    const api = config.API_URL; 
  
    //console.log("FIC: edu/index ->", api );

    //app.use(`/education${api}`, router); 
    app.use(`${api}education`, router); 
    //console.log(router);
    // Routes 
    router.use('/grupos', GruposRoutes);
    router.use('/periodos', PeriodosRoutes);  
    // Return Router 
    return router; 
}; 
module.exports = routerAPIeEducation;