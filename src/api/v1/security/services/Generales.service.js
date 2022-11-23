
import CatGenerales from '../models/Generales.model';
import boom from '@hapi/boom';

//EGRM: GET LIST CAT_GENERALES
export const getCatGeneralesList = async () => { 
  let CatGeneralesList; 
  try { 
        CatGeneralesList = await CatGenerales.find(); 
        //console.log("EGRM: ----------LISTA CatGenerales------------------", CatGeneralesList);
        return(CatGeneralesList); 
  } catch (error) { 
    //res.status(500).json({ message: 'Error: ' + EGRMError }); 
    throw boom.internal(error); 
  } 
};

//EGRM: GET ITEM CAT_GENERALES POR ID.
export const getCatGeneralItem = async (id, keyType) => { 
let CatGeneralItem; 
try { 
  if (keyType === 'OK') {
      CatGeneralItem = await CatGenerales.findOne({
        IdGenOk: id,
      }); 
  } else if (keyType === 'BK') {
      CatGeneralItem = await CatGenerales.findOne({
        IdGenBK: id,
    });
  }
  
  return(CatGeneralItem); 

} catch (error) { 
  //res.status(500).json({ message: 'Error: ' + EGRMError }); 
  throw boom.internal(error); 
} 
};

//EGRM: SERVICES POST
// POST (ADD) CatGenerales
export const postCatGeneralItem = async (paCatGeneralItem) => {
try {
  const newCatGeneralItem = new CatGenerales(paCatGeneralItem);
  return await newCatGeneralItem.save();
} catch (error) {
  throw error;
}
};

//EGRM: SERVICES POST
// PUT (MODIFY) CatGenerales

export const putCatGeneralItem = async (id, paCatGeneralItem) => {
try {
  //console.log("EGRM: PUT API CatGeneral", id);
  return await CatGenerales.findOneAndUpdate({ IdGenOk: id }, paCatGeneralItem, {
    new: true,
  });
} catch (error) {
  throw boom.badImplementation(error);
}
};


//EGRM: SERVICES DELETE
//DELETE (DROP) CatGeneral

export const deleteCatGeneralItem = async (id) => {
try {
  return await CatGenerales.findOneAndDelete({ IdGenOk: id });
} catch (error) {
  throw boom.badImplementation(error);
}
};