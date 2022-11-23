import boom from '@hapi/boom';
import ProdServ from '../models/ProdServ.model';

//Eq: GET LIST ProdServ
export const getProdServList = async () => {
    let prodServList;
    try{
        prodServList = await ProdServ.find();
        return(prodServList);
    }catch(error){
        throw boom.internal(error);
    }
};

//Eq1: GET ProdServ Item
export const getProdServItem = async (id, keyType) => {
    let prodServItem;
    try{
        if(keyType === 'OK'){
            prodServItem = await ProdServ.findOne({
                IdProdServOK : id
            });
        }
        return(prodServItem);
    }catch(error){
        throw boom.internal(error);
    }
};

//Eq1: POST (ADD) ProdServ.
export const postProdServItem = async (paProdServItem) => {
    try{
        const newProdServItem = new ProdServ(paProdServItem);
        return await newProdServItem.save();
    }catch(error){
        throw error;
    }
};

//Eq1: PUT (UPDATE) ProdServ Item.
export const putProdServItem = async (id, puProdServItem) => {
    try{
        return await ProdServ.findOneAndUpdate({ IdProdServOK : id }, puProdServItem, {
            new: true
        });
    }catch(error){
        throw boom.badImplementation(error);
    }
};

//Eq1: DELETE ProdServ Item
export const deleteProdServItem = async (id) => {
    try{
        return await ProdServ.findOneAndDelete({ IdProdServOK : id });
    }catch(error){
        throw boom.badImplementation(error);
    }
};