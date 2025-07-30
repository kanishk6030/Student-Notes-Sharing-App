const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async(req,res)=>{
    const {username,email,password} = req.body;

    const userExixts = await User.findOne({email});
    if(userExixts) return res.status(400).json({error:"User Exists Already"})

    const hashedPassword = await bcrypt.hash(password,10);
    
    const newUser = await User.create({
        username,
        email,
        password:hashedPassword
    })
    return res.status(201)
    .json({
        user: newUser,
    }); 
}
exports.login = async(req,res)=>{
    const{email,password} = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(400).json({error:"No User Found!"})

    const isMatchPass = await bcrypt.compare(password,user.password);
    if(!isMatchPass) return res.status(400).json({error:"Enter the correct Password"}) 
        
    const token = jwt.sign({userId:user._id.toString()},process.env.SECRET,{expiresIn:"24h"});
    
    return res.json({
        token,
        user:{
            id:user._id,
            username:user.username,
            email:user.email,
        }
    })
}
