import { Router } from 'express'; 
import config from '../../../../config/config';
// Import Routes 
import CatProductsRoutes from './Products.route';
import InventoriesRoutes from './Inventories.route';
import CatPricesListRoutes from './PricesList.route';
import OrdersRoutes from './Orders.route';
import Almacenes from './Almacenes.route';
import Principal from './Principal.route';

const routerAPIeCommerce = (app) => { 

    const router = Router(); 
    const api = config.API_URL; 
  
    //console.log("FIC: edu/index ->", api );
    //app.use(`/education${api}`, router); 
    app.use(`${api}commerce`, router); 
    //console.log(router);
    // Routes 
    router.use('/products', CatProductsRoutes);
    router.use('/inventories', InventoriesRoutes);  
    router.use('/prices-list', CatPricesListRoutes);
    router.use('/ordenes', OrdersRoutes);
    router.use('/almacenes',Almacenes); 
    router.use('/principal', Principal); 

    // Return Router 
    return router; 
}; 

module.exports = routerAPIeCommerce;