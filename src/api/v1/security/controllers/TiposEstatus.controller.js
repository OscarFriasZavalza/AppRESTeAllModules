import * as TiposEstatusService from '../services/TiposEstatus.service';
import boom from '@hapi/boom';

//CR: API GET.
//CR: Todos los Estatus. 
export const getTiposEstatusList = async (req, res, next) => { 
    try{ 
      const TiposEstatusList = await TiposEstatusService.getTiposEstatusList();
      //console.log("-------------------",TiposEstatusList);
      if (!TiposEstatusList) { 
        throw boom.notFound('No se encontraron tipos de estatus registrados.'); 
      } else if (TiposEstatusList) { 
        res.status(200).json(TiposEstatusList);
      }  

      } catch(error) { 
        next(error); 
      } 
};

//CR: Solo un Tipo Estatus.
export const getTipoEstatusItem = async (req, res, next) => {
  try {
    //FIC: obtener parametro id mediante la 
    //desestructuracion de objetos
    const { id } = req.params;
    //FIC: se obtiene parametro de la forma
    //clase/objeto.
    //const idProdServ = req.params.id;
  const keyType = req.query.keyType || 'OK';
  const TipoEstatusItem = await TiposEstatusService.getTipoEstatusItem(id, keyType);
  if (!TipoEstatusItem) {
    throw boom.notFound('No se encontraron tipos de estatus registrados.');
  } else if (TipoEstatusItem) {
    res.status(200).json(TipoEstatusItem);
  } 
 }catch(error){
  next(error);
}
};

//CR: API POST. 
//CR: API POST (ADD) TIPO ESTATUS. 
export const postTipoEstatusItem = async (req, res, next) => { 
  try { 
    const paTipoEstatusItem = req.body; 
    const newTipoEstatusItem = await TiposEstatusService.postTipoEstatusItem(paTipoEstatusItem); 
    if (!newTipoEstatusItem) { 
      throw boom.badRequest('No se pudo crear el Tipo Estatus.'); 
    } else if (newTipoEstatusItem) { 
      res.status(201).json(newTipoEstatusItem); 
    } 
  } catch (error) { 
    console.log(error); 
    next(error); 
  } 
};

//CR: API PUT. 
//CR: API PUT (MODIFY) TIPOS_ESTATUS. 
export const putTipoEstatusItem = async (req, res, next) => {
	try {
		const { id } = req.params;
    console.log('FIC: controller id -> ', id); 
		const paTipoEstatusItem = req.body;
    console.log('FIC: controller body -> ', paTipoEstatusItem); 
		const updatedTipoEstatusItem = await TiposEstatusService.putTipoEstatusItem(id, paTipoEstatusItem );
		if (!updatedTipoEstatusItem) {
			throw boom.badRequest('No se pudo actualizar el Tipo de Estatus.');
		} else if (updatedTipoEstatusItem) {
			res.status(200).json(updatedTipoEstatusItem);
		}
	} catch (error) {
		next(error);
	}
};
