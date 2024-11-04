const jwt=require('jsonwebtoken');

const generateToken=(user)=>{
    return jwt.sign({id:user.id,email:user.email
    },process.env.JWT_SECRET,{
        expiresIn:'30d'
    });
}


const verifyToken=(token)=>{
    jwt.verify(token,process.env.JWT_SECRET)
    .then((decoded)=>{
        return decoded;
    })
    .catch((err)=>{
        return err;
    })
}


module.exports=generateToken;
