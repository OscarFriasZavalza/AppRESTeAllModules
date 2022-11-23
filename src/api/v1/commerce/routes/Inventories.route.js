import { Router } from 'express'; 
import * as InventarioController from '../controllers/Inventario.controller';
//AQUI EL IMPORTS DE LOS CONTROLADORES.

const router = Router(); 


//AQUI VAN LOS LLAMADOS A LOS CONTROLADORES DE LAS APIS

// GET Inventario LIST
router.get('/', InventarioController.getInventarioList);
// GET Inventario ITEM
router.get('/:id', InventarioController.getInventarioItem);
//  POST (ADD) Inventario ITEM
router.post('/', InventarioController.postInventarioItem);
//  PUT (UPDATE) Inventario ITEM
router.put('/:id', InventarioController.putInventarioItem);
// DELETE Inventario ITEM
router.delete('/:id', InventarioController.deleteInventarioItem);


export default router;