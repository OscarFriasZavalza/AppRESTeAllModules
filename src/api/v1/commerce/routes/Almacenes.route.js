import { Router } from 'express'; 
import * as AlmacenesController from '../controllers/Almacenes.controller';
const router = Router(); 

//AQUI VAN LOS LLAMADOS A LOS CONTROLADORES DE LAS APIS

router.get('/', AlmacenesController.getAlmacenList);

router.get('/:id', AlmacenesController.getAlmacenItem);

router.post('/', AlmacenesController.postAlmacenItem);

router.put('/:id', AlmacenesController.putAlmacenItem);

router.delete('/:id', AlmacenesController.deleteAlmacenItem);



export default router;