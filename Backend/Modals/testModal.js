import mongoose from "mongoose";


const options={
    optNo:{
        type:String,
        required:true
    },
    optValue:{
        type:String,
        required:true
    }
}
const optionsSchem=new mongoose.Schema(options)

const questions={
        qName:{
            type:String,
            required:true
        },
        qOptions:[optionsSchem],
        correctOption:{
            type:String,
            required:true
        }
    }

const questionsSchema=new mongoose.Schema(questions)

const test={
    quizzName:{
      type:String,
      required:true,
      unique:true 
    },
    topicName:{
        type:String,
        required:true 
    },
    qList:[questionsSchema]
}

const finalTest=new mongoose.Schema(test)
const quizzModal=mongoose.model("quizzesModal",finalTest)
export default quizzModal