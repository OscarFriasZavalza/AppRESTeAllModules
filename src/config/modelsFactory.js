
import mongoose from 'mongoose'; 
import config from './config'; 

//const mongoose = require('mongoose');

const crearModelo = (nombre, schema, conexion) => {
  const modelo = conexion.model(nombre, schema, nombre);
  return modelo;
}

const obtenerModelo = (nombre, schema, conexion, dbName, dbCluster ) => {
  let message ='';
  let model;
  
  if(conexion.modelNames().includes(nombre)){
    model = conexion.model(nombre);
    //console.log("FIC: ----------M O D E L,   NO   E X I S T E------------------",model);    
    message = dbName + '.' + nombre;   
    console.log('FIC: Create Collection ======>> ', message);
  }
  else {
    model = crearModelo(nombre, schema, conexion);
    //console.log("FIC: ----------M O D E L  YA   E X I S T I A------------------",model);
    message = dbName + '.' + nombre; 
    console.log('FIC: Omitted Collection ======>> ', message);
  }
  return model;
}

module.exports = obtenerModelo;