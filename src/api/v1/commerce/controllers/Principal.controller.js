import * as PrincipalService from "../services/Principal.service";
import * as PricesService from "../services/PricesList.service";
import * as UsersService from "../../security/services/Usuarios.service";
import * as PeopleService from "../../security/services/Personas.service";
import boom from "@hapi/boom";

export const getPruebaList = async (req, res, next) => {
  try {
    const pruebaList = await PrincipalService.getPruebaList();
    if (!pruebaList) {
      throw boom.notFound(
        "¡No se encontraron categorias de productos registrados!"
      );
    }
    res.status(200).json(pruebaList);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//1
export const getProductList = async (req, res, next) => {
  const { idLista } = req.query;
  const fetchProductos = await getProductos(idLista);
  if (fetchProductos.data) {
    res.status(200).json({
      OK: true,
      productos: fetchProductos.data,
    });
  } else {
    res.status(400).json({
      OK: false,
      productos: fetchProductos.messageError,
    });
  }
};

//2
export const getVistaProdBusq = async (req, res, next) => {
  try {
    const { descripcion, idLista } = req.query;
    const filterDesc = textoSinAcentos(descripcion.toLowerCase());
    // obtener lista de todos los productos
    const fetchProductos = await getProductos(idLista);
    if (!fetchProductos.data) {
      res.status(400).json({
        OK: false,
        productos: undefined,
        message: fetchProductos.messageError,
      });
      return;
    }
    const productos = fetchProductos.data;
    // filtrar los productos
    const productosFiltrados = productos.filter((prod) => {
      const descProd = textoSinAcentos(prod.descripcion.toLowerCase());
      return descProd.includes(filterDesc);
    });
    res.status(200).json({
      OK: true,
      productos: productosFiltrados,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      OK: false,
      productos: undefined,
      message: error.message,
    });
  }
};

//3
export const getVistaAllProdOrderAlf = async (req, res, next) => {
  try {
    const {
      orderType, //AZ - ZA
      idLista,
    } = req.query;
    // obtener lista de todos los productos
    const fetchProductos = await getProductos(idLista);
    if (!fetchProductos.data) {
      res.status(400).json({
        OK: false,
        productos: undefined,
        message: fetchProductos.messageError,
      });
      return;
    }
    const productos = fetchProductos.data;
    // ordenar los productos
    const productosOrdenados = productos.sort((prod1, prod2) => {
      const descProd1 = textoSinAcentos(prod1.descripcion.toLowerCase());
      const descProd2 = textoSinAcentos(prod2.descripcion.toLowerCase());
      if (orderType == "AZ") {
        return descProd1 < descProd2 ? -1 : 1;
      } else {
        return descProd1 < descProd2 ? 1 : -1;
      }
    });
    res.status(200).json({
      OK: true,
      productos: productosOrdenados,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      OK: false,
      productos: undefined,
      message: error.message,
    });
  }
};

//4
export const getVistaProdPrice = async (req, res, next) => {
  try {
    const { minPrice, maxPrice, idLista } = req.query;
    // obtener lista de todos los productos
    const fetchProductos = await getProductos(idLista);
    if (!fetchProductos.data) {
      res.status(400).json({
        OK: false,
        productos: undefined,
        message: fetchProductos.messageError,
      });
      return;
    }
    const productos = fetchProductos.data;
    // filtrar los productos que esten en un rango de precios
    const productosFiltrados = productos.filter((prod) => {
      const min = isNaN(minPrice) ? undefined : Number(minPrice);
      const max = isNaN(maxPrice) ? undefined : Number(maxPrice);
      if (min !== undefined && max !== undefined) {
        return prod.precio >= min && prod.precio <= max;
      } else if (min !== undefined) {
        return prod.precio >= min;
      } else if (max !== undefined) {
        return prod.precio <= max;
      } else return true;
    });
    res.status(200).json({
      OK: true,
      productos: productosFiltrados,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      OK: false,
      productos: undefined,
      message: error.message,
    });
  }
};

//5
export const getVistaAllProdOrderPrice = async (req, res, next) => {
  try {
    const {
      orderType, //DESC (mayor-menor) - ASC(menor-mayor)
      idLista,
    } = req.query;
    // obtener lista de todos los productos
    const fetchProductos = await getProductos(idLista);
    if (!fetchProductos.data) {
      res.status(400).json({
        OK: false,
        productos: undefined,
        message: fetchProductos.messageError,
      });
      return;
    }
    const productos = fetchProductos.data;
    // ordenar los productos
    const productosOrdenados = productos.sort((prod1, prod2) => {
      if (orderType == "ASC") {
        return prod1.precio < prod2.precio ? -1 : 1;
      } else {
        return prod1.precio < prod2.precio ? 1 : -1;
      }
    });
    res.status(200).json({
      OK: true,
      productos: productosOrdenados,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      OK: false,
      productos: undefined,
      message: error.message,
    });
  }
};

//6
export const getVistaProdMarca = async (req, res, next) => {
  try {
    const { marca, idLista } = req.query;
    const filterMarca = textoSinAcentos(marca.toLowerCase());
    // obtener lista de todos los productos
    const fetchProductos = await getProductos(idLista);
    if (!fetchProductos.data) {
      res.status(400).json({
        OK: false,
        productos: undefined,
        message: fetchProductos.messageError,
      });
      return;
    }
    const productos = fetchProductos.data;
    // filtrar los productos
    const productosFiltrados = productos.filter((prod) => {
      const marcaProd = textoSinAcentos(prod.marca.toLowerCase());
      return marcaProd == filterMarca;
    });
    res.status(200).json({
      OK: true,
      productos: productosFiltrados,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      OK: false,
      productos: undefined,
      message: error.message,
    });
  }
};

//7
export const getUserLogin = async (req, res, next) => {
  try {
    const { userName, password } = req.query;
    // Obtener la lista de los usuarios y personas
    const userList = await UsersService.getUsuariosList();
    const peopleList = await PeopleService.getPersonasList();
    if (!userName || !password) {
      res.status(400).json({
        OK: false,
        usuario: undefined,
        message: "No se indico el usuario a buscar",
      });
      return;
    }
    if (!userList || !peopleList) {
      res.status(400).json({
        OK: false,
        usuario: undefined,
        message: "No se encontro la informacion de los usuarios",
      });
      return;
    }
    // buscar el usuario
    const usuario = {
      idPersonaOK: undefined,
      nombre: "",
      domicilios: [
        /* example
        {
        calle: "",
        entreCalle1: "",
        entreCalle2: "",
        colonia: "",
        codPostal: "",
        localidad: "",
        municipio: "",
        estado: "",
        pais: "",
        }*/
      ],
    };
    let loginOK = false;
    userList.forEach((user) => {
      // user correcto
      if (user.Usuario == userName && user.IdUsuarioBK == password) {
        loginOK = true;
        peopleList.forEach((person) => {
          if (person.IdPersonaOK == user.IdPersonaOK) {
            usuario.idPersonaOK = user.IdPersonaOK;
            usuario.nombre =
              person.Nombre?.trim() +
              " " +
              person.ApPaterno?.trim() +
              " " +
              person.ApMaterno?.trim();
            const domicilios = [];
            person.cat_personas_domicilios.forEach((dom) => {
              console.log(dom);
              domicilios.push({
                calle: dom["Calle Numero"],
                entreCalle1: dom["Entre Calle 1"],
                entreCalle2: dom["Entre Calle 2"],
                colonia: dom.Colonia,
                codPostal: dom.CodPostal,
                localidad: dom.Localidad,
                municipio: dom.Municipio,
                estado: dom.Estado,
                pais: dom.Pais,
              });
            });
            usuario.domicilios = domicilios;
          }
        });
      }
    });
    if (!loginOK) {
      res.status(400).json({
        OK: false,
        usuario: undefined,
        message: "El nombre del usuario o la contraseña es incorrecta",
      });
      return;
    }
    if (!usuario.idPersonaOK) {
      res.status(400).json({
        OK: false,
        usuario: undefined,
        message: "Informacion del usuario no encontrada",
      });
      return;
    }
    res.status(200).json({
      OK: true,
      usuario: usuario,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      OK: false,
      usuario: undefined,
      message: error.message,
    });
  }
};

// FUNCIONES
const getProductos = async (idLista) => {
  try {
    const productsList = await PrincipalService.getPruebaList();
    if (!productsList) {
      return {
        messageError: "¡No se pudo obtener la lista de productos!",
      };
    }
    let productos = [];
    productsList.forEach((prod) => {
      const IdProdServOK = prod.IdProdServOK;
      const descripcion = prod.DesProdServ;
      const _id = prod._id;
      let marca = "";
      prod.cat_prod_serv_info_ad.forEach((obj) => {
        if (obj.IdEtiqueta == "IDMARCA") marca = obj.Valor;
      });
      prod.cat_prod_serv_presenta.forEach((presenta) => {
        const IdPresentaBK = presenta.IdPresentaBK;
        const foto = presenta.cat_prod_serv_archivos[0]?.RutaArchivo;
        productos.push({
          _id: _id,
          IdProdServOK: IdProdServOK,
          IdPresentaBK: IdPresentaBK,
          descripcion: descripcion,
          marca: marca,
          foto: foto,
        });
      });
    });
    productos = await addPrecioProductos(productos, idLista);
    return {
      data: productos,
    };
  } catch (error) {
    return {
      messageError: error.message,
    };
  }
};

const addPrecioProductos = async (productos, idLista) => {
  try {
    let pricesList = await PricesService.getPricesList();
    if (!pricesList) return [];
    // obtenr la lista
    let listaPrecios = [];
    pricesList.forEach((list) => {
      if (list.IdListaOK == idLista) {
        listaPrecios = list.cat_listas_presenta_precios ?? [];
      }
    });
    // add precio a los productos
    productos.forEach((prod) => {
      listaPrecios.forEach((presentaPrecio) => {
        if (
          prod.IdProdServOK == presentaPrecio.IdProdServOK &&
          prod.IdPresentaBK == presentaPrecio.IdPresentaBK
        ) {
          //console.log("Precio del producto encontrado")
          prod.precio = presentaPrecio.Precio ?? 0;
        }
      });
      if (prod.precio === undefined) prod.precio = 0;
    });
    return productos;
  } catch (error) {
    return [];
  }
};

const textoSinAcentos = (texto = "") => {
  let newTexto = "";
  const acentos = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    Á: "A",
    É: "E",
    Í: "I",
    Ó: "O",
    Ú: "U",
  };
  for (let i = 0; i < texto.length; i++) {
    if (acentos[texto.charAt(i)]) {
      newTexto += acentos[texto.charAt(i)];
    } else {
      newTexto += texto.charAt(i);
    }
  }
  return newTexto;
};
