import TiposEstatus from '../models/TiposEstatus.model';
import boom from '@hapi/boom';

//CR: OBTENER LA LISTA DE LOS TIPOS DE ESTATUS 
export const getTiposEstatusList = async () => { 
    let TiposEstatusList; 
    try { 
      TiposEstatusList = await TiposEstatus.find();
      //console.log("FIC: ----------LISTA INSTITUTOS------------------", TiposEstatusList);
        return(TiposEstatusList); 
    } catch (error) { 
      throw boom.internal(error); 
    } 
  };
  
  //CR: OBTENER UN TIPO DE ESTATUS POR ID
export const getTipoEstatusItem = async (id, keyType) => { 
  let TipoEstatusItem; 
   
  try { 
    if (keyType === 'OK') { 
       TipoEstatusItem = await Tipos_Estatus.findOne({ 
       IdTipoEstatusOK: id, 
      }); 
    } else if (keyType === 'BK') { 
        TipoEstatusItem = await Tipos_Estatus.findOne({ 
        IdTipoEstatusBK: id, 
      }); 
    } 
    return(TipoEstatusItem); 
  } catch (error) { 
    throw boom.internal(error); 
  } 
};

//CR: POST (ADD) TIPO ESTATUS. 
export const postTipoEstatusItem = async (paTipoEstatusItem) => {
	try { 
		const newTipoEstatusItem = new Tipos_Estatus(paTipoEstatusItem); 
		return await newTipoEstatusItem.save(); 
	} catch (error) { 
		throw error; 
	} 
};

//CR: SERVICES POST
//PUT (MODIFY) TIPOS_ESTATUS

export const putTipoEstatusItem = async (id, paTipoEstatusItem) => {
	try {
		return await Tipos_Estatus.findOneAndUpdate({ IdTipoEstatusOK: id }, paTipoEstatusItem, {
			new: true,
		});
	} catch (error) {
		throw boom.badImplementation(error);
	}
};
