import mongoose from 'mongoose';
const postSchema = mongoose.Schema({
    category:String,
    mrp:Number,
    price:Number,
    name:String,               
    createdAt:{
        type:Date,
        default:new Date()
    },
});

const PostItem = mongoose.model('PostItem',postSchema);

export default PostItem;