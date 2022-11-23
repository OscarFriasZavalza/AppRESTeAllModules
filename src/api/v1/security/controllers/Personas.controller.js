import * as PersonasServices from '../services/Personas.service';
import boom from '@hapi/boom';

//EGRM: API GET 
//---------------------------------------- 
//EGRM: Todos los Personas. 
export const getPersonasList = async (req, res, next) => { 
    try{ 
      const PersonasList = await PersonasServices.getPersonasList(); 
      if (!PersonasList) { 
        throw boom.notFound('No se encontraron Personas registradas.'); 
      } else if (PersonasList) { 
        res.status(200).json(PersonasList); 
      }  

      } catch(error) { 
        next(error); 
      } 
    };

//---------------------------------------- 
//EGRM: API GET ID Persona especifica. 
export const getPersonaItem = async (req, res, next) => {
    try {
      //EGRM: obtener parametro id mediante la 
      //desestructuracion de objetos
      const { id } = req.params;


      const keyType = req.query.keyType || 'OK';


      const PersonaItem = await PersonasServices.getPersonaItem(id, keyType);
      if (!PersonaItem) {
        throw boom.notFound('No se encontro la Persona.');
      } else if (PersonaItem) {
        res.status(200).json(PersonaItem);


        
      } 
  }catch(error){
    next(error);
  }
};


//EGRM: ++++++++++++++ CONTROLLER POST ++++++++++++++++++++++
//---------------------------------------------------------- 
//EGRM: Agregar un nuevo Persona. 
export const postPersonaItem = async (req, res, next) => {
  try {
    const paPersonaItem = req.body;

    console.log('EGRM: controller paPersonaItem -> ', paPersonaItem); 

    const newPersonaItem = await PersonasServices.postPersonaItem(paPersonaItem);
    if (!newPersonaItem) {
      throw boom.badRequest('No se pudo crear la Persona.');
    } else if (newPersonaItem) {
      res.status(201).json(newPersonaItem);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};



export const putPersonaItem = async (req, res, next) => {
	try {
		const { id } = req.params;
    console.log('EGRM: controller id -> ', id); 
		const paPersonaItem = req.body;
    console.log('EGRM: controller body -> ', paPersonaItem); 
		const updatedPersonaItem = await PersonasServices.putPersonaItem(id, paPersonaItem );
		if (!updatedPersonaItem) {
			throw boom.badRequest('No se pudo actualizar la persona.');
		} else if (updatedPersonaItem) {
			res.status(200).json(updatedPersonaItem);
		}
	} catch (error) {
		next(error);
	}
};

//EGRM: SERVICES DELETE
// DELETE (DROP) PERSONA
export const deletePersonaItem = async (req, res, next) => {
	try {
		const { id } = req.params;
		const deletedPersonaItem = await PersonasServices.deletePersonaItem(id);
		if (!deletedPersonaItem) {
			throw boom.notFound(`No se encontró el contrato con id ${req.params.id}.`);
		} else if (deletedPersonaItem) {
			res.status(200).json(deletedPersonaItem);
		}
	} catch (error) {
		next(error);
	}
};