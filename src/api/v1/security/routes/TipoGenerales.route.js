import { Router } from 'express'; 
import * as CatTipoGenServController from '../controllers/TiposGenerales.controller'; 
const router = Router(); 


router.get('/', CatTipoGenServController.getCatTiposGeneralesList); 


router.get('/:id', CatTipoGenServController.getCatTiposGeneralItem); 

router.post('/', CatTipoGenServController.postCatTiposGeneralItem);

router.put('/:id', CatTipoGenServController.putCatTiposGeneralItem);

router.delete('/:id', CatTipoGenServController.deleteCatTiposGeneralItem);


export default router;