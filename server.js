const app=require('./app')
const mongoose=require('mongoose')
const dotenv=require('dotenv').config()
const URL=process.env.MONGODBURL
const PORT= process.env.PORT
const cors=require('cors')
app.use(cors())
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));

mongoose.connect(URL,()=>{
    console.log(`Connected to database`)
})
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})