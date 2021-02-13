import mongoose from 'mongoose';

const addressSchema = mongoose.Schema(
{
    name:String,
    address:String,
    landmark:String,
    total:Number,
    count:Number,
    items:[],
    createdAt:{
        type:Date,
        default:new Date()
    },
});


const userSchema = mongoose.Schema(
{
    mobNo:Number,
    address:[addressSchema],
    createdAt:{
        type:Date,
        default:new Date()
    },
})

const PostAddress = mongoose.model('PostAddress',userSchema);

export default PostAddress;