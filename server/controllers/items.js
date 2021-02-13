import PostItem from '../models/postItems.js';
import PostAddress from '../models/postAddress.js';


export const getItems= async (req,res)=>{
    try {
        const Items=await PostItem.find();
        console.log(Items);
        res.status(200).json(Items);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const createItems = async (req,res)=>{
    const item=req.body;
    const newItem = new PostItem(item);
    
    try{
        await newItem.save();
        res.status(201).json(newItem);
    }catch(error){
        res.status(409).json({message:error.message});
    }
}

export const getAddress= async (req,res)=>{
    try {
        const addresses=await PostAddress.find();
        res.status(200).json(addresses);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const createAddress = async (req,res)=>{
    const address = req.body;
    console.log(address);
    const addresses=await PostAddress.find();
    console.log(addresses);
    var data = {
		mobNo: address.mobNo, 
        address:[{
            name:address.name,
            address:address.address,
            total:address.total,
            count:address.count,
            items:address.items,
            landmark:address.landmark
        }]
    } 
    console.log(data);
    const newItem = new PostAddress(data);
    
    try{
        await newItem.save();
        res.status(201).json(newItem);
    }catch(error){
        res.status(409).json({message:error.message});
    }
}
