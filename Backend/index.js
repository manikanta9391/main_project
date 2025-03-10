import express from 'express'
import dotenv from 'dotenv'
import db_con from './MongooConnection/mongoCon.js'
import { authRouter,testModalRouter,testUpdateRouter } from './Routers/routing.js'

const app=express()
app.use(express.json())
dotenv.config()
db_con()



app.use('/auth',authRouter)
app.use('/tests',testModalRouter)
app.use('/update',testUpdateRouter)




const Port=process.env.port || 3423;
app.listen(Port,()=>{
    console.log(`server started ${Port}`)
})