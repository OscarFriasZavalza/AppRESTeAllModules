import { Router } from 'express'; 
import * as PersonaController from '../controllers/Personas.controller'; 
const router = Router(); 

router.get('/', PersonaController.getPersonasList); 


router.get('/:id', PersonaController.getPersonaItem); 

router.post('/', PersonaController.postPersonaItem);

router.put('/:id', PersonaController.putPersonaItem);

router.delete('/:id', PersonaController.deletePersonaItem);


export default router;