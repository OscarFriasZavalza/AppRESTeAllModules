import { Router } from "express";
import * as PrincipalController from "../controllers/Principal.controller";
const router = Router();

//AQUI VAN LOS LLAMADOS A LOS CONTROLADORES DE LAS APIS

//Muestra todas las categorias de productos
router.get("/", PrincipalController.getPruebaList);
//
router.get("/ProductList", PrincipalController.getProductList);
//Busca productos por descripcion en la barra de busqueda
router.get("/VistaProdBusq", PrincipalController.getVistaProdBusq);
//Muestra productos en orden alfabético
router.get(
  "/VistaAllProdOrderAlf",
  PrincipalController.getVistaAllProdOrderAlf
);
//Busca productos por rango de precios
router.get("/VistaProdPrice", PrincipalController.getVistaProdPrice);
//Muestra productos en orden por precios
router.get(
  "/VistaAllProdOrderPrice",
  PrincipalController.getVistaAllProdOrderPrice
);
//Busca productos por marca
router.get("/VistaProdMarca", PrincipalController.getVistaProdMarca);
//Login de un usuario
router.get("/UserLogin", PrincipalController.getUserLogin);

export default router;
