import {Router} from "express"
import userModel from "../models/user.model.js"
import bcrypt from "bcrypt"

const router = Router()

// post
router.post("/register",async(req,res)=>{
    try {
        const {name, email, password} = req.body;

        const isUserExists = await userModel.findOne({email})

        if(isUserExists){
            return res.status(409).json({
                success: false,
                message: "User already exists"
            })
        }

        const user = await userModel.create({
            name,
            email,
            passwordHash: await bcrypt.hash(password, 12)
        })

        console.log("user",user)
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: {
                user: {
                    name: user.name,
                    email: user.email
                }
            }
        })

    } catch (error) {
        console.log("Registration error",error)
        res.status(500).json({
            success: false,
            message: "Interanl server error"
        })
    }
})


export default router