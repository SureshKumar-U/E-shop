const express = require("express")
const app = express()
const { mongoose } = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const morgan = require('morgan')
const {connectDB} = require("./config/DbConfig")
const productRoutes = require("./routes/product.routes")
connectDB()
const PORT = process.env.PORT || 8000
app.use(morgan('dev'))
app.use(cors()) //accepts all rewwquests from any domain
app.use(express.json())

app.use("/api/v1/products", productRoutes)


app.listen(PORT,()=>console.log(`server started on ${PORT}`))