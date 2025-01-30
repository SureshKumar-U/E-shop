import express from "express"
const app = express()
import {corsConfiguration} from "./config/corsConfig.js"
import  dotenv from "dotenv"
dotenv.config()
import morgan from 'morgan'
import {logger} from "./middlewares/loggerMiddleware.js"
import {connectDB} from "./config/DbConfig.js"
import apiRoutes from "./routes/index.js"
connectDB()
const PORT = process.env.PORT || 8000
app.use(morgan('dev'))
app.use(corsConfiguration()) 
app.use(express.json()) 
app.use('/api',apiRoutes)

app.use("*", (req, res) => {
    res.status(404).json({ error: "Invalid Endpoint or Resource Not found" })
})

app.listen(PORT,()=>console.log(`server started on ${PORT}`))