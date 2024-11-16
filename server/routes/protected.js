const express=require('express')
const router=express.Router();
router.use(express.json());
const db=require('../config/db');
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
router.get('/data',(req,res)=>{
    db.all(`SELECT data FROM mqtt_data WHERE topic='Pleasure/ADC'`,(err,data)=>{
        if(err){
            console.log(err)
            res.status(500).json({message:'Server error',error:err})
        }
        else{
            res.json({success:true,data})
        }
    })

})

module.exports=router;