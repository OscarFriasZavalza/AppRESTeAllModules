import * as CatGeneralesServices from '../services/Generales.service';
import boom from '@hapi/boom';

//FIC: API GET 
//---------------------------------------- 
//FIC: Todos los CatGenerales. 
export const getCatGeneralesList = async (req, res, next) => { 
  try{ 
    const CatGeneralesList = await CatGeneralesServices.getCatGeneralesList(); 
    if (!CatGeneralesList) { 
      throw boom.notFound('No se encontraron CatGenerales registradas.'); 
    } else if (CatGeneralesList) { 
      res.status(200).json(CatGeneralesList); 
    }  

    } catch(error) { 
      next(error); 
    } 
  };

//---------------------------------------- 
//FIC: API GET ID CatGeneral especifico. 
export const getCatGeneralItem = async (req, res, next) => {
  try {
    //FIC: obtener parametro id mediante la 
    //desestructuracion de objetos
    const { id } = req.params;

    //console.log('FIC: controller id -> ', id); 

    //FIC: se obtiene parametro de la forma
    //clase/objeto.
    //const IdCatGeneral = req.params.id;

    const keyType = req.query.keyType || 'OK';

    //console.log('FIC: controller keyType -> ', keyType); 

    const CatGeneralItem = await CatGeneralesServices.getCatGeneralItem(id, keyType);
    if (!CatGeneralItem) {
      throw boom.notFound('No se encontro el CatGeneral.');
    } else if (CatGeneralItem) {
      res.status(200).json(CatGeneralItem);

      //console.log('FIC: controller resJSON -> ', CatGeneralItem); 

      
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
//FIC: Agregar un nuevo CatGeneral. 
export const postCatGeneralItem = async (req, res, next) => {
try {
  const paCatGeneralItem = req.body;

  console.log('FIC: controller paCatGeneralItem -> ', paCatGeneralItem); 

  const newCatGeneralItem = await CatGeneralesServices.postCatGeneralItem(paCatGeneralItem);
  if (!newCatGeneralItem) {
    throw boom.badRequest('No se pudo crear el CatGeneral.');
  } else if (newCatGeneralItem) {
    res.status(201).json(newCatGeneralItem);
  }
} catch (error) {
  console.log(error);
  next(error);
}
};



export const putCatGeneralItem = async (req, res, next) => {
try {
  const { id } = req.params;
  console.log('FIC: controller id -> ', id); 
  const paCatGeneralItem = req.body;
  console.log('FIC: controller body -> ', paCatGeneralItem); 
  const updatedCatGeneralItem = await CatGeneralesServices.putCatGeneralItem(id, paCatGeneralItem );
  if (!updatedCatGeneralItem) {
    throw boom.badRequest('No se pudo actualizar el CatGeneral.');
  } else if (updatedCatGeneralItem) {
    res.status(200).json(updatedCatGeneralItem);
  }
} catch (error) {
  next(error);
}
};


//FIC: SERVICES DELETE
// DELETE (DROP) CatGeneral
export const deleteCatGeneralItem = async (req, res, next) => {
try {
  const { id } = req.params;
  const deletedCatGeneralItem = await CatGeneralesServices.deleteCatGeneralItem(id);
  if (!deletedCatGeneralItem) {
    throw boom.notFound(`No se encontró el contrato con id ${req.params.id}.`);
  } else if (deletedCatGeneralItem) {
    res.status(200).json(deletedCatGeneralItem);
  }
} catch (error) {
  next(error);
}
};