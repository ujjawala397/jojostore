import PostItem from '../models/postItems.js';
export const getItems= async (req,res)=>{
    try {
        const PostItems=await PostItem.find();
        console.log(PostItems);
        res.status(200).json(PostItems);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const createItems= async (req,res)=>{
    const item=req.body;
    const newItem = new PostItem(item);
    try{
        await newItem.save();
        res.status(201).json(newItem);
    }catch(error){
        res.status(409).json({message:error.message});
    }
}