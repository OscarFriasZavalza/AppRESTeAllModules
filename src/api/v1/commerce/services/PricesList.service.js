import PricesList from  '../models/PricesList.model';
import boom from '@hapi/boom';
 

export const getPricesList = async () => {
  let pricesList;
  try{
    pricesList = await PricesList.find();
    return(pricesList);
  }catch(error){
    throw boom.internal(error);
  }
}


export const getPricesItem = async (id, keyType) => {
  let pricesItem;
  try{
    if(keyType === 'OK'){
        pricesItem = await PricesList.findOne({
          IdListaOK : id
      });
    }
    return(pricesItem);
  }catch(error){
    throw boom.internal(error);
  }
}

 
export const postPreicesItem = async (paPricesItem) => { 
	try { 
		const newPricesItem = new Orders(paPricesItem); 
		return await newPricesItem.save(); 
	} catch (error) { 
		throw error; 
	} 
}


export const putPricesItem = async (id, puPricesItem) => {
	try {
		return await PricesList.findOneAndUpdate({ IdListaOK: id }, puPricesItem, {
			new: true,
		});
	} catch (error) {
		throw boom.badImplementation(error);
	}
};


export const deletePricesItem = async (id) => {
	try {
		return await PricesList.findOneAndDelete({ IdListaOK: id });
	} catch (error) {
		throw boom.badImplementation(error);
	}
};