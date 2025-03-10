import express from 'express'
import { LoginDetail,signupDetail } from '../Controller/authController.js'
import { insertData ,getData,getDataId} from '../Controller/testandupdate.js'
const authRouter=express.Router()
const testModalRouter=express.Router()
const testUpdateRouter=express.Router()





authRouter.post('/login',LoginDetail)
authRouter.post('/signup',signupDetail)




testModalRouter.post('/newTest',insertData)
testModalRouter.get('/',getData)
testModalRouter.get('/testid',getDataId)



testUpdateRouter.post('/newAdd',)
testUpdateRouter.put('/update',)








export {authRouter,testModalRouter,testUpdateRouter}