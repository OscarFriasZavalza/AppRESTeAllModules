import { Router } from 'express'; 
import * as GruposController from '../controllers/Grupos.controller'; 

const router = Router();

//console.log("FIC: router ->", router );
 
//JGZ: GET GRUPOS LIST
router.get('/', GruposController.getGruposList);
//JGZ: GET GRUPOS ITEM
router.get('/:id', GruposController.getGruposItem);
//JGZ: POST (ADD) GRUPOS ITEM
router.post('/', GruposController.postGruposItem);
//JGZ: PUT (UPDATE) GRUPOS ITEM
router.put('/:id', GruposController.putGruposItem);
//JGZ: DELETE GRUPOS ITEM
router.delete('/:id', GruposController.deleteGruposItem);

export default router; 