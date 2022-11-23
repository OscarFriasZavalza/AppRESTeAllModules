import * as PricesListService from "../services/PricesList.service";
import boom from "@hapi/boom";

export const getPricesList = async (req, res, next) => {
  try {
    const pricesList = await PricesListService.getPricesList();
    if (!pricesList) {
      throw boom.notFound("¡No se encontraron listas de precios registradas!");
    } else if (pricesList) {
      res.status(200).json(pricesList);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};


export const getPricesItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const keyType = req.query.keyType || "OK";
    const pricesItem = await PricesListService.getPricesItem(id, keyType);
    console.log(req);
    if (!pricesItem) {
      throw boom.notFound("¡No se encontraron listas de precios registradas!");
    } else if (pricesItem) {
      res.status(200).json(pricesItem);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};


export const postPricesItem = async (req, res, next) => {
  try {
    const paPricesItem = req.body;
    const newPricesItem = await PricesListService.postPreicesItem(paPricesItem);
    if (!newPricesItem) {
      throw boom.badRequest("¡No se pudo crear la Orden!");
    } else if (newPricesItem) {
      res.status(201).json(newPricesItem);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
 
export const putPricesItem = async (req, res, next) => {
	try {
		const { id } = req.params;
		const puPricesItem = req.body;
		const updatedPricesItem = await PricesListService.putPricesItem(id, puPricesItem );
		if (!updatedPricesItem) {
			throw boom.badRequest('¡No se pudo actualizar la Orden!');
		} else if (updatedPricesItem) {
			res.status(200).json(updatedPricesItem);
		}
	} catch (error) {
    console.log(error);
		next(error);
	}
};

 
export const deletePricesItem = async (req, res, next) => {
	try {
		const { id } = req.params;
		const deletedPricesItem = await PricesListService.deletePricesItem(id);
		if (!deletedPricesItem) {
			throw boom.notFound(`No se encontró la Orden con Id: ${req.params.id}.`);
		} else if (deletedPricesItem) {
			res.status(200).json(deletedPricesItem);
		}
	} catch (error) {
    console.log(error);
		next(error);
	}
};