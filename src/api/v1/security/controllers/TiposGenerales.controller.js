import * as CatTiposGeneralesServices from '../services/TiposGenerales.service';
import boom from '@hapi/boom';

//EGRM: API GET 
//---------------------------------------- 
//EGRM: Todos los Productos/Servicios. 
export const getCatTiposGeneralesList = async (req, res, next) => { 
  try{ 
    const CatTiposGeneralesList = await CatTiposGeneralesServices.getCatTiposGeneralesList(); 
    if (!CatTiposGeneralesList) { 
      throw boom.notFound('No se encontraron CatTiposGenerales registrados.'); 
    } else if (CatTiposGeneralesList) { 
      res.status(200).json(CatTiposGeneralesList); 
    }  

    } catch(error) { 
      next(error); 
    } 
  };

//---------------------------------------- 
//EGRM: API GET ID CatTiposGeneral especifico. 
export const getCatTiposGeneralItem = async (req, res, next) => {
  try {
    //EGRM: obtener parametro id mediante la 
    //desestructuracion de objetos
    const { id } = req.params;

    //console.log('EGRM: controller id -> ', id); 

    //EGRM: se obtiene parametro de la forma
    //clase/objeto.
    //const IdCatTiposGeneral = req.params.id;

    const keyType = req.query.keyType || 'OK';

    //console.log('EGRM: controller keyType -> ', keyType); 

    const CatTiposGeneralItem = await CatTiposGeneralesServices.getCatTiposGeneralItem(id, keyType);
    if (!CatTiposGeneralItem) {
      throw boom.notFound('No se encontro el CatTiposGeneral.');
    } else if (CatTiposGeneralItem) {
      res.status(200).json(CatTiposGeneralItem);

      //console.log('EGRM: controller resJSON -> ', CatTiposGeneralItem); 

      
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


//EGRM: ++++++++++++++ CONTROLLER POST ++++++++++++++++++++++
//---------------------------------------------------------- 
//EGRM: Agregar un nuevo CatTiposGeneral. 
export const postCatTiposGeneralItem = async (req, res, next) => {
try {
  const paCatTiposGeneralItem = req.body;

  console.log('EGRM: controller paCatTiposGeneralItem -> ', paCatTiposGeneralItem); 

  const newCatTiposGeneralItem = await CatTiposGeneralesServices.postCatTiposGeneralItem(paCatTiposGeneralItem);
  if (!newCatTiposGeneralItem) {
    throw boom.badRequest('No se pudo crear el CatTiposGeneral.');
  } else if (newCatTiposGeneralItem) {
    res.status(201).json(newCatTiposGeneralItem);
  }
} catch (error) {
  console.log(error);
  next(error);
}
};



export const putCatTiposGeneralItem = async (req, res, next) => {
try {
  const { id } = req.params;
  console.log('EGRM: controller id -> ', id); 
  const paCatTiposGeneralItem = req.body;
  console.log('EGRM: controller body -> ', paCatTiposGeneralItem); 
  const updatedCatTiposGeneralItem = await CatTiposGeneralesServices.putCatTiposGeneralItem(id, paCatTiposGeneralItem );
  if (!updatedCatTiposGeneralItem) {
    throw boom.badRequest('No se pudo actualizar el CatTiposGeneral.');
  } else if (updatedCatTiposGeneralItem) {
    res.status(200).json(updatedCatTiposGeneralItem);
  }
} catch (error) {
  next(error);
}
};


//EGRM: SERVICES DELETE
// DELETE (DROP) CatTiposGeneral
export const deleteCatTiposGeneralItem = async (req, res, next) => {
try {
  const { id } = req.params;
  const deletedCatTiposGeneralItem = await CatTiposGeneralesServices.deleteCatTiposGeneralItem(id);
  if (!deletedCatTiposGeneralItem) {
    throw boom.notFound(`No se encontró el contrato con id ${req.params.id}.`);
  } else if (deletedCatTiposGeneralItem) {
    res.status(200).json(deletedCatTiposGeneralItem);
  }
} catch (error) {
  next(error);
}
};