import Almacenes from '../models/Almacenes.model';
import boom from '@hapi/boom';

export const getAlmacenList = async () => {
    let almacenList;
    try{
        almacenList = await Almacenes.find();
      return(almacenList);
    }catch(error){
      throw boom.internal(error);
    }
  }

  export const getAlmacenItem = async (id, keyType) => {
    let almacenItem;
    try{
      if(keyType === 'OK'){
        almacenItem = await Almacenes.findOne({
            IdOrdenOK : id
        });
      }
      return(almacenItem);
    }catch(error){
      throw boom.internal(error);
    }
  }
  
  export const postAlmacenItem = async (paAlmacenesItem) => { 
      try { 
          const newAlmacenItem = new Almacenes(paAlmacenesItem); 
          return await newAlmacenItem.save(); 
      } catch (error) { 
          throw error; 
      } 
  }
  

  export const putAlmacenItem = async (id, puAlmacenesItem) => {
      try {
          return await Almacenes.findOneAndUpdate({ IdAlmacenOK: id }, puAlmacenesItem, {
              new: true,
          });
      } catch (error) {
          throw boom.badImplementation(error);
      }
  };
  

  export const deleteAlmacenItem = async (id) => {
      try {
          return await Almacenes.findOneAndDelete({ IdAlmacenOK: id });
      } catch (error) {
          throw boom.badImplementation(error);
      }
  };