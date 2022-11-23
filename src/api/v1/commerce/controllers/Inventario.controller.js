import * as InventarioService from "../services/Inventarios.service";
import boom from "@hapi/boom";

export const getInventarioList = async (req, res, next) => {
    try {
      const inventarioList = await InventarioService.getInventarioList();
      if (!inventarioList) {
        throw boom.notFound("¡No se encontraron ordenes registradas!");
      } else if (inventarioList) {
        res.status(200).json(inventarioList);
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  };


export const getInventarioItem = async (req, res, next) => {
    try {
      const { id } = req.params;
      const keyType = req.query.keyType || "OK";
      const inventarioItem = await InventarioService.getInventarioItem(id, keyType);
      console.log(req);
      if (!inventarioItem) {
        throw boom.notFound("¡No se encontraron Ordenes registradas!");
      } else if (inventarioItem) {
        res.status(200).json(inventarioItem);
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }; 

//API POST (ADD) Inventario.
export const postInventarioItem = async (req, res, next) => {
    try {
      const paInventarioItem = req.body;
      const newInventarioItem = await InventarioService.postInventarioItem(paInventarioItem);
      if (!newInventarioItem) {
        throw boom.badRequest("¡No se pudo crear la Orden!");
      } else if (newInventarioItem) {
        res.status(201).json(newInventarioItem);
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  };  

//API PUT (UPDATE) Inventario Item. 
export const putInventarioItem = async (req, res, next) => {
	try {
		const { id } = req.params;
		const puInventarioItem = req.body;
		const updatedInventarioItem = await InventarioService.putInventarioItem(id, puInventarioItem );
		if (!updatedInventarioItem) {
			throw boom.badRequest('¡No se pudo actualizar la Orden!');
		} else if (updatedInventarioItem) {
			res.status(200).json(updatedInventarioItem);
		}
	} catch (error) {
    console.log(error);
		next(error);
	}
};  

//API DELETE Inventario Item. 
export const deleteInventarioItem = async (req, res, next) => {
	try {
		const { id } = req.params;
		const deletedInventarioItem = await InventarioService.deletedInventarioItem(id);
		if (!deletedInventarioItem) {
			throw boom.notFound(`No se encontró la Orden con Id: ${req.params.id}.`);
		} else if (deletedInventarioItem) {
			res.status(200).json(deletedInventarioItem);
		}
	} catch (error) {
    console.log(error);
		next(error);
	}
};
