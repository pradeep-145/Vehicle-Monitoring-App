const express=require('express')
const router=express.Router();
router.use(express.json());

const verifyToken=require('../services/jwtService');
const verify=(req,res,next)=>{
    try{
        const response = verifyToken.verifyToken(req.headers.authorization.split(' ')[1])
        req.user=response
        next()
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:'Server error',error})
    }
}
router.get('/',verify,(req,res)=>{
    console.log(req.user.mobile)
    res.json({success:true,data:req.user})
})

module.exports=router;