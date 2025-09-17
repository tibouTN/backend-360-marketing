import User from "../models/user.model.js";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user
    const newUser = await User.create({
      name,
      email,
      role,
      password: hashedPassword,
    });

    // generate token
    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    res.status(201).json({
      success: true,
      message: "User created",
      data: {
        token,
        user: newUser,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
    try {
        const {email,password}=req.body;
        
        const user =await User.findOne({email}); 
        if (!user){
            const error= new Error('user not found');
            error.statusCode=404;
            throw error;
        }
        
        const isPasswordValid = await bcrypt.compare(password,user.password);
        if (!isPasswordValid){
            const error= new Error('invallid password');
            error.statusCode=401;
            throw error;
        }
        const token =jwt.sign({userid:user._id},JWT_SECRET,{expiresIn:JWT_EXPIRES_IN});
        res.status(200).json({
            succes:true,
            message:'user signed in succesfully',
            data:{
                token,
                user,
            }
        });

    }
    catch(error){
        next(error);
    }



};
export const signout = async (req, res, next) => {
    try {
      res.status(200).json({
        success: true,
        message: "User signed out successfully",
      });
    } catch (error) {
      next(error);
    }
  };
  