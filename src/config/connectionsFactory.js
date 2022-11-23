
import mongoose from 'mongoose'; 
import config from './config'; 

//const mongoose = require('mongoose');
/* const DB_USER = process.env.DB_USER || 'defaultUser';
const DB_PASS = process.env.DB_PASS || 'defaultPass';
 */

const options = {
  useNewUrlParser: true,
  //useCreateIndex: true,
  useUnifiedTopology: true,
  //useFindAndModify: false,
  autoIndex: true,
  //poolSize: 15,
  //bufferMaxEntries: 0,
  //connectTimeoutMS: 15000,
  //socketTimeoutMS: 30000
};

const crearConexion = (dbName, dbCluster) => {

    const uri = `mongodb+srv://${config.DB_USER}:${config.DB_PASSWORD}@${dbCluster}.mongodb.net/${dbName}?retryWrites=true&w=majority`;
            //mongodb+srv://Andromeda:Tormenta@dbeeducation.7eqhc.mongodb.net/db_esecurity?retryWrites=true&w=majority
            //console.log("..............FIC: URI:", uri);
            return mongoose.createConnection(uri, options);
}

const obtenerConexion = (dbName, dbCluster) => {


    //console.log("FIC: -----> Obtener Conexion - dbName ->", dbName);
    //console.log("FIC: -----> Obtener Cluster - dbCluster ->", dbCluster);

    let [ conexion ] = mongoose.connections.filter(conn => conn.name === dbName);
    
    if(!conexion) {
      conexion = crearConexion(dbName, dbCluster);
      //console.log('FIC: <<>> Database connected: ', conexion.collection.length);
      //console.log('FIC: <<>> Database is connected to: ', dbName);
    }
    return conexion;
}

module.exports = obtenerConexion;