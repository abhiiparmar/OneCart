import express from "express"
import { adminLogin, GoogleLogin, logIn, logOut, Registration } from "../controller/AuthController.js"

const authRoutes = express.Router()

authRoutes.post("/registration",Registration)
authRoutes.post("/login",logIn)
authRoutes.get("/logout",logOut)
authRoutes.post("/googlelogin",GoogleLogin)
authRoutes.post("/adminlogin",adminLogin)




export default authRoutes;