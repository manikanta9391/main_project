import mongoose from "mongoose";
import dotenv from "dotenv"



dotenv.config()

const {db_user,db_password}=process.env;
const db_url=`mongodb+srv://${db_user}:${db_password}@cluster0.5uoum.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const db_con=()=>{
 mongoose.connect(db_url).then(function(){
    console.log("server connected")
 }).catch(err=>{
    console.log(err.messsage)
 })
}
export default db_con