import * as ProdServService from "../services/ProdServ.service"
import boom from "@hapi/boom";

export const getProdServList = async (req, res, next) => {
    try{
        const prodServList = await ProdServService.getProdServList();
        if(!prodServList){
            throw boom.notFound("¡No se encontraron productos/servicios registrados!");
        }else if(prodServList){
            res.status(200).json(prodServList);
        }
    }catch(error){
        console.log(error);
        next(error);
    }
};

//Eq1: Un solo producto/servicio.
export const getProdServItem = async (req, res, next) => {
    try{
        const { id } = req.params;
        const keyType = req.query.keyType || "OK";
        const prodServItem = await ProdServService.getProdServItem(id, keyType);
        console.log(req);
        if(!prodServItem){
            throw boom.notFound("¡No se encontraron productos/servicios registrados!");
        }else if(prodServItem){
            res.status(200).json(prodServItem);
        }
    }catch(error){
        console.log(error);
        next(error);
    }
};

//API POST (ADD) Productos/Servicios.
export const postProdServItem = async (req, res, next) => {
    try{
        const paProdServItem = req.body;
        const newProdServItem = await ProdServService.postProdServItem(paProdServItem);
        if(!newProdServItem){
            throw boom.badRequest("¡No se pudo crear el producto/servicio!");
        }else if(newProdServItem){
            res.status(201).json(newProdServItem);
        }
    }catch(error){
        console.log(error);
        next(error);
    }
};

//API PUT (UPDATE) Productos/Servicios Item. 
export const putProdServItem = async (req, res, next) => {
	try {
		const { id } = req.params;
		const puProdServItem = req.body;
		const updatedProdServItem = await ProdServService.putProdServItem(id, puProdServItem );
		if (!updatedProdServItem) {
			throw boom.badRequest('¡No se pudo actualizar el producto/servicio!');
		} else if (updatedProdServItem) {
			res.status(200).json(updatedProdServItem);
		}
	} catch (error) {
    console.log(error);
		next(error);
	}
};

//API DELETE Orders Item. 
export const deleteProdServItem = async (req, res, next) => {
	try {
		const { id } = req.params;
		const deletedProdServItem = await ProdServService.deleteProdServItem(id);
		if (!deletedProdServItem) {
			throw boom.notFound(`No se encontró el producto/servicio con Id: ${req.params.id}.`);
		} else if (deletedProdServItem) {
			res.status(200).json(deletedProdServItem);
		}
	} catch (error) {
    console.log(error);
		next(error);
	}
};
