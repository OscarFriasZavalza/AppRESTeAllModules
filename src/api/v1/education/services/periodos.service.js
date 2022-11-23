import Periodos from '../models/Periodos.model';
import boom from '@hapi/boom';
 
export const getPeriodosList = async () => { 
    let periodosList; 
    try { 
          periodosList = await Periodos.find(); 
          return(periodosList); 
    } catch (error) { 
      //res.status(500).json({ message: 'Error: ' + ficError }); 
      throw boom.internal(error); 
    } 
  };
  export const getPeriodosItem = async (id, keyType) => { 
    let periodosItem; 
    try { 
      if(keyType === 'OK'){
        periodosItem = await Periodos.findOne({
            IdPeriodoOK : id
        });
      } else if (keyType === 'BK'){
        periodosItem = await Periodos.findOne({
          IdPeriodoBK : id
        });
      }
    } catch (error) { 
      //res.status(500).json({ message: 'Error: ' + ficError }); 
      throw boom.internal(error); 
    } 
  };

  export const postPeriodosItem = async (paPeriodosItem) => { 
    try { 
      const newPeriodosItem = new Grupos(paPeriodosItem); 
      return await newPeriodosItem.save(); 
    } catch (error) { 
      throw error; 
    } 
  };
  
  //PUT (UPDATE) Grupos Item. 
  export const putPeriodosItem = async (id, puPeriodosItem) => {
    try {
      //console.log("PUT API PERIODOS", id);
      return await Periodos.findOneAndUpdate({ IdPeriodoOK: id }, puPeriodosItem, {
        new: true,
      });
    } catch (error) {
      throw boom.badImplementation(error);
    }
  };
  
  //DELETE Grupos Item. 
  export const deletePeriodosItem = async (id) => {
    try {
      return await Periodos.findOneAndDelete({ IdPeriodoOK: id });
    } catch (error) {
      throw boom.badImplementation(error);
    }
  };