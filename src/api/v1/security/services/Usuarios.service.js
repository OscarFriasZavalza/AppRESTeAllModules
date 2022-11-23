import Usuarios from '../models/Usuarios.model';
import boom from '@hapi/boom';

//CR: OBTENER LA LISTA DE USUARIOS 
export const getUsuariosList = async () => { 
    let UsuariosList; 
    try { 
        UsuariosList = await Usuarios.find(); 
        //console.log("Chris.................",UsuariosList);
        return(UsuariosList); 
    } catch (error) { 
      throw boom.internal(error); 
    } 
  };

//CR: OBTENER UN USUARIO POR ID
export const getUsuarioItem = async (id, keyType) => { 
  let UsuarioItem; 
   
  try { 
    if (keyType === 'OK') { 
       UsuarioItem = await Usuarios.findOne({ 
       IdUsuarioOK: id, 
      }); 
    } else if (keyType === 'BK') { 
        UsuarioItem = await Usuarios.findOne({ 
        IdUsuarioBK: id, 
      }); 
    } 
    return(UsuarioItem); 
  } catch (error) { 
    throw boom.internal(error); 
  } 
};

//CR: POST (ADD) USUARIOS. 
export const postUsuarioItem = async (paUsuarioItem) => {
	try { 
		const newUsuarioItem = new Usuarios(paUsuarioItem); 
		return await newUsuarioItem.save(); 
	} catch (error) { 
		throw error; 
	} 
};

//CR: SERVICES POST
//PUT (MODIFY) USUARIOS

export const putUsuarioItem = async (id, paUsuarioItem) => {
	try {
		return await Usuarios.findOneAndUpdate({ IdUsuarioOK: id }, paUsuarioItem, {
			new: true,
		});
	} catch (error) {
		throw boom.badImplementation(error);
	}
};
