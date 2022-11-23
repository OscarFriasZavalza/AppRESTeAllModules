import Grupos from '../models/Grupos.model';
import boom from '@hapi/boom'; 

//JGZ: GET LIST Grupos
export const getGruposList = async () => {
  let gruposList;
  try{
    gruposList = await Grupos.find();
    return(gruposList);
  }catch(error){
    throw boom.internal(error);
  }
}

//JGZ: GET Grupos Item
export const getGruposItem = async (id, keyType) => {
  let gruposItem;

  try{
    if(keyType === 'OK'){
      gruposItem = await Grupos.findOne({
          IdGrupoOK : id
      });
    } else if (keyType === 'BK'){
      gruposItem = await Grupos.findOne({
        IdGrupoBK : id
      });
    }
    return(gruposItem);
  }catch(error){
    throw boom.internal(error);
  }
}

//JGZ: POST (ADD) Productos y/o Servicios. 
export const postGruposItem = async (paGruposItem) => { 
	try { 
		const newGruposItem = new Grupos(paGruposItem); 
		return await newGruposItem.save(); 
	} catch (error) { 
		throw error; 
	} 
};
 
//JGZ: PUT (UPDATE) Grupos Item. 
export const putGruposItem = async (id, puGruposItem) => {
	try {
    //console.log("JGZ: PUT API INSTITUTO", id);
		return await Grupos.findOneAndUpdate({ IdGrupoOK: id }, puGruposItem, {
			new: true,
		});
	} catch (error) {
		throw boom.badImplementation(error);
	}
};

//JGZ: DELETE Grupos Item. 
export const deleteGruposItem = async (id) => {
	try {
		return await Grupos.findOneAndDelete({ IdGrupoOK: id });
	} catch (error) {
		throw boom.badImplementation(error);
	}
};