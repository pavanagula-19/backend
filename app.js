const Posts=require('./models/postmodel')
const express=require('express')
const app=express()

app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next()
});
app.post('/api/v1/posts', async (req,res)=>{
    try{
        const newPosts=await Posts.create(req.body)
        res.status(201).json({
            status:"Success",
            newPosts
        })
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})

app.get('/api/v1/allpost',async (req,res)=>{
    try{
        const allposts=await Posts.find()
        res.status(200).json({
            status:"Success",
            allposts
        })
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})


module.exports=app