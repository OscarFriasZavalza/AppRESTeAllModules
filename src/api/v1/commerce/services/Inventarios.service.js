import Inventarios from '../models/Inventarios.model';
import boom from '@hapi/boom';

//Equipo 4: GET LIST Inventarios
export const getInventarioList = async () => {
    let inventarioList;
    try{
        inventarioList = await Inventarios.find();
      return(inventarioList);
    }catch(error){
      throw boom.internal(error);
    }
  }

  
//Equipo 4: GET Inventarios Item
export const getInventarioItem = async (id, keyType) => {
    let inventarioItem;
    try{
      if(keyType === 'OK'){
        inventarioItem = await Inventarios.findOne({
            IdAlmacenOK : id
        });
      }
      return(inventarioItem);
    }catch(error){
      throw boom.internal(error);
    }
  }

//Equipo 4: POST (ADD) Inventario. 
export const postInventarioItem = async (paInventarioItem) => { 
	try { 
		const newInventarioItem = new Inventarios(paInventarioItem); 
		return await newInventarioItem.save(); 
	} catch (error) { 
		throw error; 
	} 
}

//Equipo 4: PUT (UPDATE) Inventario Item. 
export const putInventarioItem = async (id, puInventarioItem) => {
	try {
		return await Inventarios.findOneAndUpdate({ IdAlmacenOK: id }, puInventarioItem, {
			new: true,
		});
	} catch (error) {
		throw boom.badImplementation(error);
	}
};

//Equipo 4: DELETE Inventario Item. 
export const deleteInventarioItem = async (id) => {
	try {
		return await Inventarios.findOneAndDelete({ IdAlmacenOK: id });
	} catch (error) {
		throw boom.badImplementation(error);
	}
};