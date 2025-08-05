import User from '../model/UserModel.js'
import validator from "validator"
import bcrypt from "bcryptjs"
import { genToken, genToken1 } from "../config/Token.js";



export const Registration = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({ Message: "User Already Exist" })
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ Message: "Enter Valid Email" })
        }
        if (password.length < 8) {
            return res.status(400).json({ Message: "Enter 8 Digit Password" })
        }
        let hashPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ name, email, password: hashPassword })

        let token = await genToken(user._id)
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(201).json(user)
    } catch (error) {
        console.log("Registration Error")
        return res.status(500).json({ message: `Registration Error ${error}` })
    }
}



export const logIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: "User is Not Found" })
        }
        let isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect Password" })
        }
        let token = await genToken(user._id)
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(201).json(user)

    } catch (error) {
        console.log("LogIn Error")
        return res.status(500).json({ message: `LogIn Error ${error}` })
    }
}


export const logOut = async (req, res) => {
    try {
        res.clearCookie("token")
        return res.status(200).json({ message: "LogOut Successfully" })
    } catch (error) {
        console.log("LogOut Error")
        return res.status(500).json({ message: `LogOut Error ${error}` })
    }
}


export const GoogleLogin = async (req,res) => {
    try {
         let {name, email} = req.body
        let user = await User.findOne({ email })
        if (!user) {
            user = await User.create({
                name,email
            })
        }

        let token = await genToken(user._id)
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(200).json(user)
    } catch (error) {
         console.log("GoogleLogin Error")
        return res.status(500).json({ message: `GoogleLogin Error ${error}` })       
    }

} 

export const adminLogin = async (req,res) => {
    try {
          let { email, password } = req.body;
          if( email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
                    let token = await genToken1(email)
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 1 * 24 * 60 * 60 * 1000
        })
        return res.status(200).json(token)
          }
          return res.status(400).json({message: "Invalid Credentials"})
    } catch (error) {
          console.log("AdminLogin Error")
        return res.status(500).json({ message: `AdminLogin Error ${error}` })          
    }
}
