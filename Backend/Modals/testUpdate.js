import mongoose from "mongoose";



const updateAttempt={
     attemptNo:{
        type:Number,
        required:true
     },
     Score:{
        type:Number,
        required:true
     }
}

const updateSchema=new mongoose.Schema(updateAttempt)


const updateId={
    testId:{
        type:String,
        required:true,
        unique:true
    },
    totalScores:[updateSchema]
}

const idSchema=new mongoose.Schema(updateId)


const update={
    UsernameId:{
        type:String,
        required:true,
        unique:true
    },
    totalTests:[idSchema]
}


const total=new mongoose.Schema(update)
const testUpdate=mongoose.model("test-responses",update)
export default testUpdate