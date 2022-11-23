
import CatTiposGenerales from '../models/TiposGenerales.model';
import boom from '@hapi/boom';

//EGRM: GET LIST CatTiposGenerales
export const getCatTiposGeneralesList = async () => { 
  let CatTiposGeneralesList; 
  try { 
        CatTiposGeneralesList = await CatTiposGenerales.find(); 
        //console.log("EGRM: ----------LISTA CatTiposGenerales------------------", CatTiposGeneralesList);
        return(CatTiposGeneralesList); 
  } catch (error) { 
    throw boom.internal(error); 
  } 
};

//: GET ITEM CAT_TIPO_GENERALES POR ID.
export const getCatTiposGeneralItem = async (id, keyType) => { 
let CatTiposGeneralItem; 
try { 
  if (keyType === 'OK') {
      CatTiposGeneralItem = await CatTiposGenerales.findOne({
        IdTipoGenOK: id,
      }); 
  } else if (keyType === 'BK') {
      CatTiposGeneralItem = await CatTiposGenerales.findOne({
        IdTipoGenBK: id,
    });
  }
  
  return(CatTiposGeneralItem); 

} catch (error) { 
  throw boom.internal(error); 
} 
};

//EGRM: SERVICES POST
// POST (ADD) CatTiposGenerales
export const postCatTiposGeneralItem = async (paCatTiposGeneralItem) => {
try {
  const newCatTiposGeneralItem = new CatTiposGenerales(paCatTiposGeneralItem);
  return await newCatTiposGeneralItem.save();
} catch (error) {
  throw error;
}
};

//EGRM: SERVICES POST
// PUT (MODIFY) CatTiposGenerales

export const putCatTiposGeneralItem = async (id, paCatTiposGeneralItem) => {
try {
  //console.log("EGRM: PUT API CatTiposGeneral", id);
  return await CatTiposGenerales.findOneAndUpdate({ IdTipoGenOK: id }, paCatTiposGeneralItem, {
    new: true,
  });
} catch (error) {
  throw boom.badImplementation(error);
}
};


//EGRM: SERVICES DELETE
//DELETE (DROP) CatTiposGeneral

export const deleteCatTiposGeneralItem = async (id) => {
try {
  return await CatTiposGenerales.findOneAndDelete({ IdTipoGenOK: id });
} catch (error) {
  throw boom.badImplementation(error);
}
};