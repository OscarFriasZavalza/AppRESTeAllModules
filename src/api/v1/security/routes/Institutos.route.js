import { Router } from 'express'; 
import * as InstitutoController from '../controllers/Institutos.controller'; 
const router = Router(); 
//ficRouter.get('/list', ProdServController.getProdServList); 
router.get('/', InstitutoController.getInstitutosList); 
//router.get('/item/:ficIdProdServ', prodServController.getProdServItem); 

router.get('/:id', InstitutoController.getInstitutoItem); 

router.post('/', InstitutoController.postInstitutoItem);

router.put('/:id', InstitutoController.putInstitutoItem);

router.delete('/:id', InstitutoController.deleteInstitutoItem);


export default router;