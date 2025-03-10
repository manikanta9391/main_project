import express from 'express'
import dotenv from 'dotenv'
import db_con from './MongooConnection/mongoCon.js'
import userModal from './Modals/userModal.js'


const app=express()
app.use(express.json())
dotenv.config()
db_con()


app.post('/',async (req,res)=>{
    const details=req.body;
    try{
        const insert=await userModal.create(details)
        res.status(200).json({
            message:insert,
            status:"success"
        })
    } 
        catch(err){
           res.status(400).json({
            message:err.message
           })
        }
    
})
const Port=process.env.port || 3423;
app.listen(Port,()=>{
    console.log(`server started ${Port}`)
})