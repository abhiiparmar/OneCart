import express, { json } from 'express'
import dotenv from 'dotenv'
import connectDB from './config/database.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
import cors from "cors"
import userRoutes from './routes/userRoutes.js';
import productRouter from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
dotenv.config()


let Port = process.env.PORT || 6000;

let app = express();

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:["https://onecart-frontend-sybj.onrender.com","https://onecart-admin-x8js.onrender.com"],
    credentials:true
}))

app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/product",productRouter)
app.use("/api/cart", cartRoutes)
app.use("/api/order", orderRoutes)




app.listen(Port,() => {
    console.log("Server is running");
    connectDB()
})
