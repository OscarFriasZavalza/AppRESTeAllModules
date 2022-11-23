import * as AlmacenesService from "../services/Almacenes.service";
import boom from "@hapi/boom";

export const getAlmacenList = async (req, res, next) => {
    try {
      const almacenList = await AlmacenesService.getAlmacenList();
      if (!almacenList) {
        throw boom.notFound("¡No se encontraron almacenes registrados!");
      } else if (almacenList) {
        res.status(200).json(almacenList);
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
  

  export const getAlmacenItem = async (req, res, next) => {
    try {
      const { id } = req.params;
      const keyType = req.query.keyType || "OK";
      const almacenItem = await AlmacenesService.getAlmacenItem(id, keyType);
      console.log(req);
      if (!almacenItem) {
        throw boom.notFound("¡No se encontro Almacen registrado!");
      } else if (almacenItem) {
        res.status(200).json(almacenItem);
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
  
 
  export const postAlmacenItem = async (req, res, next) => {
    try {
      const paAlmacenItem = req.body;
      const newAlmacenItem = await AlmacenesService.postAlmacenItem(paAlmacenItem);
      if (!newAlmacenItem) {
        throw boom.badRequest("¡No se pudo crear el Almacen!");
      } else if (newAlmacenItem) {
        res.status(201).json(newAlmacenItem);
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
  

  export const putAlmacenItem = async (req, res, next) => {
      try {
          const { id } = req.params;
          const puAlmacenesItem = req.body;
          const updatedAlmacenItem = await AlmacenesService.putAlmacenItem(id, puAlmacenesItem );
          if (!updatedAlmacenItem) {
              throw boom.badRequest('¡No se pudo actualizar el Almacen!');
          } else if (updatedAlmacenItem) {
              res.status(200).json(updatedAlmacenItem);
          }
      } catch (error) {
      console.log(error);
          next(error);
      }
  };
  

  export const deleteAlmacenItem = async (req, res, next) => {
      try {
          const { id } = req.params;
      //console.log(id);
          const deletedAlmacenItem = await AlmacenesService.deleteAlmacenItem(id);
          if (!deletedAlmacenItem) {
              throw boom.notFound(`No se encontró el Almacen con Id: ${req.params.id}.`);
          } else if (deletedAlmacenItem) {
              res.status(200).json(deletedAlmacenItem);
          }
      } catch (error) {
      console.log(error);
          next(error);
      }
  };
  