import { Router } from 'express'; 
import * as ProdServController from '../controllers/ProdServ.controller'

//AQUI EL IMPORTS DE LOS CONTROLADORES.

const router = Router(); 

//Eq1: GET ProdServ LIST
router.get('/',ProdServController.getProdServList);
//Eq1: GET ProdServ ITEM
router.get('/:id',ProdServController.getProdServItem);
//Eq1: POST (ADD) ProdServ ITEM
router.post('/',ProdServController.postProdServItem);
//Eq1: PUT (UPDATE) ProdServ ITEM
router.put('/:id',ProdServController.putProdServItem);
//Eq1: DELETE ProdServ ITEM
router.delete('/:id',ProdServController.deleteProdServItem);

//AQUI VAN LOS LLAMADOS A LOS CONTROLADORES DE LAS APIS

export default router;