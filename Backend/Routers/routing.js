import express from 'express'


const authRouter=express.Router()
const testModalRouter=express.Router()
const testUpdateRouter=express.Router()





authRouter.post('/login',)
authRouter.post('/signup',)




testModalRouter.post('/newTest',)
testModalRouter.get('/testId',)



testUpdateRouter.post('/newAdd',)
testUpdateRouter.put('/update',)








export {authRouter,testModalRouter,testUpdateRouter}