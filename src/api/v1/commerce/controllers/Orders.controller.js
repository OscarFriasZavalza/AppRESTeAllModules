import * as OrdersService from "../services/Orders.service";
import boom from "@hapi/boom";

export const getOrdersList = async (req, res, next) => {
  try {
    const ordersList = await OrdersService.getOrdersList();
    if (!ordersList) {
      throw boom.notFound("¡No se encontraron ordenes registradas!");
    } else if (ordersList) {
      res.status(200).json(ordersList);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//Eq1: Una sola Orden.
export const getOrdersItem = async (req, res, next) => {
  try {
    const  id  = req.params.id;
    const  type  = req.params.type;
    // const keyType = req.query.keyType || "OK" || "BK";
    if(type == "OK"){
      const ordersItem = await OrdersService.getOrdersItem(id, type);
    
      if (!ordersItem) {
        throw boom.notFound("¡No se encontraron Ordenes registradas!");
      } else if (ordersItem) {
        res.status(200).json(ordersItem);
      }
    }
    else if(type == "BK"){
      const ordersItem = await OrdersService.getOrdersItem(id, type);
    
      if (!ordersItem) {
        throw boom.notFound("¡No se encontraron Ordenes registradas!");
      } else if (ordersItem) {
        res.status(200).json(ordersItem);
      }
    }
    else if(type == "Des"){
      const ordersItem = await OrdersService.getOrdersItem(id, type);
      if (!ordersItem) {
        throw boom.notFound("¡No se encontraron ordenes registradas!");
      } else if (ordersItem) {
        res.status(200).json(ordersItem);
      }
    }
    else{
      res.status(200).json([]);
    }

  } catch (error) {
    console.log(error);
    next(error);
  }
};

//API POST (ADD) Orders.
export const postOrdersItem = async (req, res, next) => {
  try {
    const paOrdersItem = req.body;
    const newOrdersItem = await OrdersService.postOrdersItem(paOrdersItem);
    if (!newOrdersItem) {
      throw boom.badRequest("¡No se pudo crear la Orden!");
    } else if (newGruposItem) {
      res.status(201).json(newGruposItem);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//API PUT (UPDATE) Orders Item. 
export const putOrdersItem = async (req, res, next) => {
	try {
		const { id } = req.params;
		const puOrdersItem = req.body;
		const updatedOrdersItem = await OrdersService.putOrdersItem(id, puOrdersItem );
		if (!updatedOrdersItem) {
			throw boom.badRequest('¡No se pudo actualizar la Orden!');
		} else if (updatedOrdersItem) {
			res.status(200).json(updatedOrdersItem);
		}
	} catch (error) {
    console.log(error);
		next(error);
	}
};

//API DELETE Orders Item. 
export const deleteOrdersItem = async (req, res, next) => {
	try {
		const { id } = req.params;
    //console.log(id);
		const deletedOrdersItem = await OrdersService.deleteOrdersItem(id);
		if (!deletedOrdersItem) {
			throw boom.notFound(`No se encontró la Orden con Id: ${req.params.id}.`);
		} else if (deletedOrdersItem) {
			res.status(200).json(deletedOrdersItem);
		}
	} catch (error) {
    console.log(error);
		next(error);
	}
};
