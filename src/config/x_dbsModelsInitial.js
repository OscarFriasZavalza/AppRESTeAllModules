

//import Institutos from '../api/v1/security/models/Institutos.model';
//import Grupos from '../api/v1/education/models/Grupos.model';
import obtenerConexion from './connectionsFactory';
import obtenerModelo from './modelsFactory';

const salvarApp = async (req, res) => {
  let connSecurity = obtenerConexion('db_esecurity');
  let Institutos = obtenerModelo('cat_institutos', Institutos, connSecurity);
  let newInstituto = new Institutos(req.body);
  try {
    let savedAppPRE = newAppPRE.save();
    return res.status(201).json({ message: 'Success'});
  }
  catch(e) {
    console.error(e.message);
    return res.status(500).json({ message: 'Error'});
  }
}

module.exports = salvarApp;