import Estatus from '../models/Estatus.model';
import boom from '@hapi/boom';

//CR: OBTENER LA LISTA DE ESTATUS 
export const getEstatusList = async () => { 
    let EstatusList; 
    try { 
      EstatusList = await Estatus.find(); 
        return(EstatusList); 
    } catch (error) { 
      throw boom.internal(error); 
    } 
  };

//CR: OBTENER UN ESTATUS POR ID
export const getEstatusItem = async (id, keyType) => { 
  let EstatusItem; 
   
  try { 
    if (keyType === 'OK') { 
       EstatusItem = await Estatus.findOne({ 
       IdEstatusOK: id, 
      }); 
    } else if (keyType === 'BK') { 
        EstatusItem = await Estatus.findOne({ 
        IdEstatusBK: id, 
      }); 
    } 
    return(EstatusItem); 
  } catch (error) { 
    throw boom.internal(error); 
  } 
};

//CR: POST (ADD) ESTATUS. 
export const postEstatusItem = async (paEstatusItem) => {
	try { 
		const newEstatusItem = new Estatus(paEstatusItem); 
		return await newEstatusItem.save(); 
	} catch (error) { 
		throw error; 
	} 
};

//PUT (MODIFY) ESTATUS

export const putEstatusItem = async (id, paEstatusItem) => {
	try {
		return await Estatus.findOneAndUpdate({ IdEstatusOK: id }, paEstatusItem, {
			new: true,
		});
	} catch (error) {
		throw boom.badImplementation(error);
	}
};
