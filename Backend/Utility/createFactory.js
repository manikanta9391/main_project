
export const insertFunction=(elementModal)=>{

    return async function(req,res) {
          const details=req.body;
          try{
            await elementModal.create(details)
            res.status(200).json({
                status:"Success",
                message:"Success fully inserted"
            })
          }
          catch(err){
            res.status(200).json({
                status:"failed",
                message:err.message
            })
          }
    }
}


export const getFunction=(elementModal)=>{
    
    return async function(req,res) {
        //const details=req.body;
        try{
         const list= await elementModal.find()
          res.status(200).json({
              status:"Success",
              message:list
          })
        }
        catch(err){
          res.status(200).json({
              status:"failed",
              message:err.message
          })
        }
  }
}

export const getFunctionId=(elementModal)=>{
    return async function(req,res) {
        const details=req.body;
        try{
         const list= await elementModal.find(details)
          res.status(200).json({
              status:"Success",
              message:list
          })
        }
        catch(err){
          res.status(200).json({
              status:"failed",
              message:err.message
          })
        }
  }
}