import { Router } from 'express'; 
 import * as OrdersController from '../controllers/Orders.controller';
//AQUI EL IMPORTS DE LOS CONTROLADORES.

const router = Router(); 


//AQUI VAN LOS LLAMADOS A LOS CONTROLADORES DE LAS APIS
//Eq1: GET Orders LIST
router.get('/', OrdersController.getOrdersList);
//Eq1: GET Orders ITEM
router.get('/:type/:id', OrdersController.getOrdersItem);
// //Eq1: POST (ADD) Orders ITEM
router.post('/', OrdersController.postOrdersItem);
// //Eq1: PUT (UPDATE) Orders ITEM
router.put('/:id', OrdersController.putOrdersItem);
// //Eq1: DELETE Orders ITEM
router.delete('/:id', OrdersController.deleteOrdersItem);

export default router;