
import Personas from '../models/Personas.model';
import boom from '@hapi/boom';

//EGRM: GET LIST Personas
export const getPersonasList = async () => { 
    let PersonasList; 
    try { 
          PersonasList = await Personas.find(); 
          //console.log("EGRM: ----------LISTA Personas------------------", PersonasList);
          return(PersonasList); 
    } catch (error) { 
      //res.status(500).json({ message: 'Error: ' + ficError }); 
      throw boom.internal(error); 
    } 
  };

//EGRM: GET ITEM PERSONA POR ID.
export const getPersonaItem = async (id, keyType) => { 
  let PersonaItem; 
  try { 
    if (keyType === 'OK') {
        PersonaItem = await Personas.findOne({
          IdPersonaOK: id,
        }); 
    } else if (keyType === 'BK') {
        PersonaItem = await Personas.findOne({
        IdPersonaBK: id,
      });
    }
    
    return(PersonaItem); 
  
  } catch (error) { 
    //res.status(500).json({ message: 'Error: ' + ficError }); 
    throw boom.internal(error); 
  } 
};

//EGRM: SERVICES POST
// POST (ADD) Personas
export const postPersonaItem = async (paPersonaItem) => {
	try {
		const newPersonaItem = new Personas(paPersonaItem);
		return await newPersonaItem.save();
	} catch (error) {
		throw error;
	}
};

//EGRM: SERVICES POST
// PUT (MODIFY) Personas

export const putPersonaItem = async (id, paPersonaItem) => {
	try {
		return await Personas.findOneAndUpdate({ IdPersonaOK: id }, paPersonaItem, {
			new: true,
		});
	} catch (error) {
		throw boom.badImplementation(error);
	}
};

//EGRM: SERVICES DELETE
//DELETE (DROP) Persona

export const deletePersonaItem = async (id) => {
	try {
		return await Personas.findOneAndDelete({ IdPersonaOK: id });
	} catch (error) {
		throw boom.badImplementation(error);
	}
};

