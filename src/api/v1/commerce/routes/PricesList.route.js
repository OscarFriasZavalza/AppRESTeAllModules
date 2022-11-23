import { Router } from 'express'; 
import * as PricesListController from '../controllers/PricesList.controller'

//AQUI EL IMPORTS DE LOS CONTROLADORES.

const router = Router(); 

//AQUI VAN LOS LLAMADOS A LOS CONTROLADORES DE LAS APIS
// GET PRICESLIST
router.get('/', PricesListController.getPricesList);
// GET PRICES ITEM
router.get('/:id', PricesListController.getPricesItem);
// POST (ADD) PRICES ITEM
router.post('/', PricesListController.postPricesItem);
// PUT (UPDATE) PRICES ITEM
router.put('/:id', PricesListController.putPricesItem);
// DELETE PRICES ITEM
router.delete('/:id', PricesListController.deletePricesItem);

export default router;