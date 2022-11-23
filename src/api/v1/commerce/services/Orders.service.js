import Orders from '../models/Orders.model';
import boom from '@hapi/boom';
 
//Eq1: GET LIST Orders
export const getOrdersList = async () => {
  let ordersList;
  try{
    ordersList = await Orders.find();
    return(ordersList);
  }catch(error){
    throw boom.internal(error);
  }
}

//Eq1: GET Orders Item
export const getOrdersItem = async (id, keyType) => {
  let ordersItem;
  console.log("--------------------------> "+id);
  console.log("--------------------------> "+keyType);
  try{
    if(keyType === 'OK'){
      ordersItem = await Orders.findOne({
          IdOrdenOK : id
      });
      return(ordersItem);
    }
    else if(keyType === 'BK'){
      ordersItem = await Orders.findOne({
          IdOrdenBK : id
      });
      return(ordersItem);
    }
    else if(keyType === 'Des'){
      ordersItem = await Orders.find({
        "ordenes_presenta_ps.DesPresentaPS": { $regex: id, $options: "i" }
      });
      console.log(ordersItem);
      return(ordersItem);
    }else{
      return(ordersItem);
    }
    
    
  }catch(error){
    throw boom.internal(error);
  }
}

//Eq1: POST (ADD) Orders. 
export const postOrdersItem = async (paOrdersItem) => { 
	try { 
		const newOrdersItem = new Orders(paOrdersItem); 
		return await newOrdersItem.save(); 
	} catch (error) { 
		throw error; 
	} 
}

//Eq1: PUT (UPDATE) Orders Item. 
export const putOrdersItem = async (id, puOrdersItem) => {
	try {
		return await Orders.findOneAndUpdate({ IdOrdenOK: id }, puOrdersItem, {
			new: true,
		});
	} catch (error) {
		throw boom.badImplementation(error);
	}
};

//Eq1: DELETE Orders Item. 
export const deleteOrdersItem = async (id) => {
	try {
		return await Orders.findOneAndDelete({ IdOrdenOK: id });
	} catch (error) {
		throw boom.badImplementation(error);
	}
};