const express = require("express")
const app = express()
const { mongoose } = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const productRoutes = require("./routes/product.routes")

app.use(cors()) //accepts all requests from any domain
app.use(express.json())


app.use("/api/v1/products", productRoutes)

mongoose.connect(process.env.MongoDB_URI).
then(()=>console.log("dbconnected"))
.catch(()=>console.log("error occured while connecting to db"))


app.listen(8080,()=>console.log("server started on 8080"))