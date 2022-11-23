
import * as GruposService from '../services/Grupos.service';
import boom from '@hapi/boom';
 
//JGZ: API GET 
//---------------------------------------- 
//JGZ: Todos los Grupos. 
export const getGruposList = async (req, res, next) => {
  try{
    const gruposList = await GruposService.getGruposList();
    if(!gruposList){
      throw boom.notFound("¡No se encontraron grupos registrados!");
    }else if(gruposList){
      res.status(200).json(gruposList);
    }
  }catch(error){
    console.log(error);
    next(error);
  }
}

//JGZ: Un solo Grupos. 
export const getGruposItem = async (req, res, next) => {
  try{
    const { id } = req.params;
    const keyType = req.query.keyType || 'OK';
    const gruposItem = await GruposService.getGruposItem(id, keyType);
    if(!gruposItem){
      throw boom.notFound('¡No se encontraron Grupos registrados!');
    }else if(gruposItem){
      res.status(200).json(gruposItem);
    }
  }catch(error){
    console.log(error);
    next(error);
  }
}

//API POST (ADD) Producto y/o Servicio. 
export const postGruposItem = async (req, res, next) => { 
  try { 
    const paGruposItem = req.body; 
    const newGruposItem = await GruposService.postGruposItem(paGruposItem); 
    if (!newGruposItem) { 
      throw boom.badRequest('¡No se pudo crear el Grupo!'); 
    } else if (newGruposItem) { 
      res.status(201).json(newGruposItem); 
    } 
  } catch (error) { 
    console.log(error); 
    next(error); 
  } 
};

//API PUT (UPDATE) Grupos Item. 
export const putGruposItem = async (req, res, next) => {
	try {
		const { id } = req.params;
    //console.log('JGZ: controller id -> ', id); 
		const puGruposItem = req.body;
    //console.log('JGZ: controller body -> ', puGruposItem); 
		const updatedGruposItem = await GruposService.putGruposItem(id, puGruposItem );
		if (!updatedGruposItem) {
			throw boom.badRequest('¡No se pudo actualizar el Grupo!');
		} else if (updatedGruposItem) {
			res.status(200).json(updatedGruposItem);
		}
	} catch (error) {
    console.log(error);
		next(error);
	}
};

//API DELETE Grupos Item. 
export const deleteGruposItem = async (req, res, next) => {
	try {
		const { id } = req.params;
    //console.log(id);
		const deletedGruposItem = await GruposService.deleteGruposItem(id);
		if (!deletedGruposItem) {
			throw boom.notFound(`No se encontró el Grupo con Id: ${req.params.id}.`);
		} else if (deletedGruposItem) {
			res.status(200).json(deletedGruposItem);
		}
	} catch (error) {
    console.log(error);
		next(error);
	}
};