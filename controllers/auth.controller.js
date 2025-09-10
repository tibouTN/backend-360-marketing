import User from "../models/user.model.js";
import mongoose, { connect } from "mongoose";
import bcrypt from "bcryptjs";
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env.js";
import jwt from 'jsonwebtoken'
import usersRouter from "../routes/users.js";



export const signup = async (req, res,next) => {


    try{
        const {name,email,password,role}=req.body;

        const existingUser = await User.findOne({ email });
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = await User.create([{name,email,role,password}]);
        const token = jwt.sign({userId:newUser[0]._id},JWT_SECRET,{expiresIn:JWT_EXPIRES_IN})


        res.statusCode(201).json({
            success:true,
            message:'User created',
            data:{
                token,
                user:newUser[0],
            }
        })
    }
    catch(error){

        next(error);
    }
};
export const signin = async (req, res,next) =>{};
export const signout = async (req, res,next) =>{};