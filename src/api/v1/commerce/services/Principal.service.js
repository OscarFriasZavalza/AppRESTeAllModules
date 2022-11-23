import CatProdServ from '../models/CatProdServ.model';
import boom from '@hapi/boom';

export const getPruebaList = async () => {
    let PruebaList;
    try{
      PruebaList = await CatProdServ.find();
      return(PruebaList);
    }catch(error){
      throw boom.internal(error);
    }
}
