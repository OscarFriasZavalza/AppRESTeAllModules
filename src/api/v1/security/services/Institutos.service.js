
import Institutos from '../models/Institutos.model';
import boom from '@hapi/boom';

//FIC: GET LIST INSTITUTOS
export const getInstitutosList = async () => { 
    let InstitutosList; 
    try { 
          InstitutosList = await Institutos.find(); 
          //console.log("FIC: ----------LISTA INSTITUTOS------------------", InstitutosList);
          return(InstitutosList); 
    } catch (error) { 
      //res.status(500).json({ message: 'Error: ' + ficError }); 
      throw boom.internal(error); 
    } 
  };

//FIC: GET ITEM INSTITUTO POR ID.
export const getInstitutoItem = async (id, keyType) => { 
  let InstitutoItem; 
  try { 
    if (keyType === 'OK') {
        InstitutoItem = await Institutos.findOne({
          IdInstitutoOK: id,
        }); 
    } else if (keyType === 'BK') {
        InstitutoItem = await Institutos.findOne({
        IdInstitutoBK: id,
      });
    }
    
    return(InstitutoItem); 
  
  } catch (error) { 
    //res.status(500).json({ message: 'Error: ' + ficError }); 
    throw boom.internal(error); 
  } 
};

//FIC: SERVICES POST
// POST (ADD) INSTITUTOS
export const postInstitutoItem = async (paInstitutoItem) => {
	try {
		const newInstitutoItem = new Institutos(paInstitutoItem);
		return await newInstitutoItem.save();
	} catch (error) {
		throw error;
	}
};

//FIC: SERVICES POST
// PUT (MODIFY) INSTITUTOS

export const putInstitutoItem = async (id, paInstitutoItem) => {
	try {
    //console.log("FIC: PUT API INSTITUTO", id);
		return await Institutos.findOneAndUpdate({ IdInstitutoOK: id }, paInstitutoItem, {
			new: true,
		});
	} catch (error) {
		throw boom.badImplementation(error);
	}
};


//FIC: SERVICES DELETE
//DELETE (DROP) INSTITUTO

export const deleteInstitutoItem = async (id) => {
	try {
		return await Institutos.findOneAndDelete({ IdInstitutoOK: id });
	} catch (error) {
		throw boom.badImplementation(error);
	}
};