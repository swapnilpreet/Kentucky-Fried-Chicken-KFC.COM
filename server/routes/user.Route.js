const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');
const UserModel = require('../models/user.model');


// register

router.post('/register',async(req,res)=>{
    try {
        const user = await UserModel.findOne({email: req.body.email});
        if(user){
            res.send({
                success:false,
                message:"User already exists",
            });
        }else{
            const salt = await bcrypt.genSalt(10);
            const hashpassword = await bcrypt.hash(req.body.password,salt);
            req.body.password=hashpassword;
            const newuser = new UserModel(req.body);
            await newuser.save();
            res.send({
                success:true,
                message:"registration successfull"
            })
        }
    } catch (error) {
        res.send({
            success:false,
            message:error.message,
        })
    }
})

router.post('/login', async (req,res)=>{
    try {
        const user=await UserModel.findOne({email:req.body.email});
        if(!user){
           throw new Error("User's account is blocked, please contact to administrator");
        }
        // compare password
        const validPassword= await bcrypt.compare(
            req.body.password,
            user.password,
        );
        if(!validPassword){
            throw new Error("Invalid password");
        }
        // create and assign token
        const token = jwt.sign({userId:user._id,email:user.email,firstname:user.firstname,lastname:user.lastname},process.env.TOKEN_SECRET)
        res.send({
            success:true,
            message:"user login successfull",
            data:token,
        })
    } catch (error) {
        res.send({
            success:false,
            message:error.message,
        })
    }
})
module.exports=router;