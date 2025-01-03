import express from "express"
const app = express()
import {corsConfiguration} from "./config/corsConfig.js"
import  dotenv from "dotenv"
dotenv.config()
import morgan from 'morgan'
import {connectDB} from "./config/DbConfig.js"
import productRoutes  from "./routes/product.routes.js"
import userRoutes from "./routes/user.routes.js"
connectDB()
const PORT = process.env.PORT || 8000
app.use(morgan('dev'))
app.use(corsConfiguration()) 
app.use(express.json())

app.use("/api/v1/products", productRoutes)
app.use("/api/v1/users", userRoutes)
app.use("*", (req, res) => {
    res.status(404).json({ error: "Invalid Endpoint or Resource Not found" })
})


app.listen(PORT,()=>console.log(`server started on ${PORT}`))