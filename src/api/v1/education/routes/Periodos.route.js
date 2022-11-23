import { Router } from 'express'; 
import * as periodosController from '../controllers/periodos.controller'; 
const router = Router(); 
router.get('/', periodosController.getPeriodosList);
router.get('/:id', periodosController.getPeriodosItem); 
router.post('/', periodosController.postPeriodosItem); 
router.put('/:id', periodosController.putPeriodosItem);
router.delete('/:id', periodosController.deletePeriodosItem);  
export default router;