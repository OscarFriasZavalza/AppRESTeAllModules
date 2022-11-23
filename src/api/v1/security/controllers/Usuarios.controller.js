import * as UsuariosService from '../services/Usuarios.service';
import boom from '@hapi/boom';

//CR: API GET.
//CR: Todos los Usuarios. 
export const getUsuariosList = async (req, res, next) => { 
    try{ 
      //console.log("........HOLA", req)
      const UsuariosList = await UsuariosService.getUsuariosList();
      if (!UsuariosList) { 
        throw boom.notFound('No se encontraron usuarios registrados.'); 
      } else if (UsuariosList) { 
        res.status(200).json(UsuariosList);
      }  

      } catch(error) { 
        next(error); 
      } 
    };

//CR: Solo un Usuario.
export const getUsuarioItem = async (req, res, next) => {
  try {
    //FIC: obtener parametro id mediante la 
    //desestructuracion de objetos
    const { id } = req.params;
    //FIC: se obtiene parametro de la forma
    //clase/objeto.
    //const idProdServ = req.params.id;
  const keyType = req.query.keyType || 'OK';
  const UsuarioItem = await UsuariosService.getUsuarioItem(id, keyType);
  if (!UsuarioItem) {
    throw boom.notFound('No se encontraron usuarios registrados.');
  } else if (UsuarioItem) {
    res.status(200).json(UsuarioItem);
  } 
 }catch(error){
  next(error);
}
};

//CR: API POST. 
//CR: API POST (ADD) USUARIO. 
export const postUsuarioItem = async (req, res, next) => { 
  try { 
    const paUsuarioItem = req.body; 
    const newUsuarioItem = await UsuariosService.postUsuarioItem(paUsuarioItem); 
    if (!newUsuarioItem) { 
      throw boom.badRequest('No se pudo crear el Usuario.'); 
    } else if (newUsuarioItem) { 
      res.status(201).json(newUsuarioItem); 
    } 
  } catch (error) { 
    console.log(error); 
    next(error); 
  } 
};

//CR: API PUT. 
//CR: API PUT (MODIFY) USUARIO. 
export const putUsuarioItem = async (req, res, next) => {
	try {
		const { id } = req.params;
    console.log('FIC: controller id -> ', id); 
		const paUsuarioItem = req.body;
    console.log('FIC: controller body -> ', paUsuarioItem); 
		const updatedUsuarioItem = await UsuariosService.putUsuarioItem(id, paUsuarioItem );
		if (!updatedUsuarioItem) {
			throw boom.badRequest('No se pudo actualizar el Usuario.');
		} else if (updatedUsuarioItem) {
			res.status(200).json(updatedUsuarioItem);
		}
	} catch (error) {
		next(error);
	}
};
