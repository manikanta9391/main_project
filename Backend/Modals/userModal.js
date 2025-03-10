import mongoose from "mongoose";

const user={
    UserName:{
        type:String,
        required:true,
        unique:true
    }
}

const userSchema=new mongoose.Schema(user)
const userModal=mongoose.model("userData",userSchema)
export default userModal