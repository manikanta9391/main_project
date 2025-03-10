import express from 'express'
import dotenv from 'dotenv'
import db_con from './MongooConnection/mongoCon.js'


const app=express()
dotenv.config()
db_con()



const Port=process.env.port || 3423;
app.listen(Port,()=>{
    console.log(`server started ${Port}`)
})