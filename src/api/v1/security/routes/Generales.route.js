import { Router } from 'express'; 
import * as CatGeneralesController from '../controllers/Generales.controller'; 
const router = Router(); 

router.get('/', CatGeneralesController.getCatGeneralesList); 

router.get('/:id', CatGeneralesController.getCatGeneralItem); 

router.post('/', CatGeneralesController.postCatGeneralItem);

router.put('/:id', CatGeneralesController.putCatGeneralItem);

router.delete('/:id', CatGeneralesController.deleteCatGeneralItem);


export default router;