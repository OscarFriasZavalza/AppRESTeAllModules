import * as EstatusService from '../services/Estatus.service';
import boom from '@hapi/boom';

//CR: API GET.
//CR: Todos los Estatus. 
export const getEstatusList = async (req, res, next) => { 
    try{ 
      const EstatusList = await EstatusService.getEstatusList();
      if (!EstatusList) { 
        throw boom.notFound('No se encontraron estatus registrados.'); 
      } else if (EstatusList) { 
        res.status(200).json(EstatusList);
      }  

      } catch(error) { 
        next(error); 
      } 
};

//CR: Solo un Estatus.
export const getEstatusItem = async (req, res, next) => {
  try {
    //FIC: obtener parametro id mediante la 
    //desestructuracion de objetos
    const { id } = req.params;
    //FIC: se obtiene parametro de la forma
    //clase/objeto.
    //const idProdServ = req.params.id;
  const keyType = req.query.keyType || 'OK';
  const EstatusItem = await EstatusService.getEstatusItem(id, keyType);
  if (!EstatusItem) {
    throw boom.notFound('No se encontraron estatus registrados.');
  } else if (EstatusItem) {
    res.status(200).json(EstatusItem);
  } 
 }catch(error){
  next(error);
}
};

//CR: API POST. 
//CR: API POST (ADD) ESTATUS. 
export const postEstatusItem = async (req, res, next) => { 
  try { 
    const paEstatusItem = req.body; 
    const newEstatusItem = await EstatusService.postEstatusItem(paEstatusItem); 
    if (!newEstatusItem) { 
      throw boom.badRequest('No se pudo crear el Estatus.'); 
    } else if (newEstatusItem) { 
      res.status(201).json(newEstatusItem); 
    } 
  } catch (error) { 
    console.log(error); 
    next(error); 
  } 
};

//CR: API PUT. 
//CR: API PUT (MODIFY) ESTATUS. 
export const putEstatusItem = async (req, res, next) => {
	try {
		const { id } = req.params;
    console.log('FIC: controller id -> ', id); 
		const paEstatusItem = req.body;
    console.log('FIC: controller body -> ', paEstatusItem); 
		const updatedEstatusItem = await EstatusService.putEstatusItem(id, paEstatusItem );
		if (!updatedEstatusItem) {
			throw boom.badRequest('No se pudo actualizar el Estatus.');
		} else if (updatedEstatusItem) {
			res.status(200).json(updatedEstatusItem);
		}
	} catch (error) {
		next(error);
	}
};
