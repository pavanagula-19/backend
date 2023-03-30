const mongoose=require('mongoose')
const postSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

const Posts=mongoose.model('post',postSchema)

module.exports=Posts