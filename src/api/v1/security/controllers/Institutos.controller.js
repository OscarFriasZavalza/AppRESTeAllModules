import * as InstitutosServices from '../services/Institutos.service';
import boom from '@hapi/boom';

//FIC: API GET 
//---------------------------------------- 
//FIC: Todos los Institutos. 
export const getInstitutosList = async (req, res, next) => { 
    try{ 
      const InstitutosList = await InstitutosServices.getInstitutosList(); 
      if (!InstitutosList) { 
        throw boom.notFound('No se encontraron Institutos registrados.'); 
      } else if (InstitutosList) { 
        res.status(200).json(InstitutosList); 
      }  

      } catch(error) { 
        next(error); 
      } 
    };

//---------------------------------------- 
//FIC: API GET ID Instituto especifico. 
export const getInstitutoItem = async (req, res, next) => {
    try {
      //FIC: obtener parametro id mediante la 
      //desestructuracion de objetos
      const { id } = req.params;

      //console.log('FIC: controller id -> ', id); 

      //FIC: se obtiene parametro de la forma
      //clase/objeto.
      //const IdInstituto = req.params.id;

      const keyType = req.query.keyType || 'OK';

      //console.log('FIC: controller keyType -> ', keyType); 

      const InstitutoItem = await InstitutosServices.getInstitutoItem(id, keyType);
      if (!InstitutoItem) {
        throw boom.notFound('No se encontro el Instituto.');
      } else if (InstitutoItem) {
        res.status(200).json(InstitutoItem);

        //console.log('FIC: controller resJSON -> ', InstitutoItem); 

        
      } 
      /* else {
        throw boom.badRequest(
          'Error al hacer la petición, verifique la información e intente de nuevo.'
        ); 
      } */
  }catch(error){
    next(error);
  }
};


//FIC: ++++++++++++++ CONTROLLER POST ++++++++++++++++++++++
//---------------------------------------------------------- 
//FIC: Agregar un nuevo Instituto. 
export const postInstitutoItem = async (req, res, next) => {
  try {
    const paInstitutoItem = req.body;

    console.log('FIC: controller paInstitutoItem -> ', paInstitutoItem); 

    const newInstitutoItem = await InstitutosServices.postInstitutoItem(paInstitutoItem);
    if (!newInstitutoItem) {
      throw boom.badRequest('No se pudo crear el Instituto.');
    } else if (newInstitutoItem) {
      res.status(201).json(newInstitutoItem);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};



export const putInstitutoItem = async (req, res, next) => {
	try {
		const { id } = req.params;
    console.log('FIC: controller id -> ', id); 
		const paInstitutoItem = req.body;
    console.log('FIC: controller body -> ', paInstitutoItem); 
		const updatedInstitutoItem = await InstitutosServices.putInstitutoItem(id, paInstitutoItem );
		if (!updatedInstitutoItem) {
			throw boom.badRequest('No se pudo actualizar el Instituto.');
		} else if (updatedInstitutoItem) {
			res.status(200).json(updatedInstitutoItem);
		}
	} catch (error) {
		next(error);
	}
};


//FIC: SERVICES DELETE
// DELETE (DROP) INSTITUTO
export const deleteInstitutoItem = async (req, res, next) => {
	try {
		const { id } = req.params;
		const deletedInstitutoItem = await InstitutosServices.deleteInstitutoItem(id);
		if (!deletedInstitutoItem) {
			throw boom.notFound(`No se encontró el contrato con id ${req.params.id}.`);
		} else if (deletedInstitutoItem) {
			res.status(200).json(deletedInstitutoItem);
		}
	} catch (error) {
		next(error);
	}
};
