import { Router } from 'express'; 

import config from '../../../../config/config'
// Import Routes 
import CatInstitutosRoutes from './Institutos.route'; 
import CatPersonasRoutes from './Personas.route'; 
import CatTipoGeneralesRoutes from './TipoGenerales.route'; 
import CatGeneralesRoutes from './Generales.route'; 
import CatEstatusRoutes from './Estatus.route';
import CatTiposEstatusRoutes from './TiposEstatus.route';
import CatUsuariosRoutes from './Usuarios.routes';

const routerAPIeSecurity = (app) => { 
    const router = Router(); 
    const api = config.API_URL; 

    //console.log("FIC: sec/index ->", api );
    //app.use(`/security${api}`, router); 
    app.use(`${api}security`, router); 
    // Routes 
    router.use('/institutos', CatInstitutosRoutes); 
    
    router.use('/personas', CatPersonasRoutes); 
    //router.use('/orders', ordersRoutes); 

    router.use('/cattiposgenerales', CatTipoGeneralesRoutes); 

    router.use('/catgenerales', CatGeneralesRoutes); 

    router.use('/Estatus', CatEstatusRoutes);
    router.use('/tipos-estatus', CatTiposEstatusRoutes);
    router.use('/Usuarios', CatUsuariosRoutes);
    //router.use('/orders', ordersRoutes); 
    // Return Router 
    return router; 
}; 

module.exports = routerAPIeSecurity;