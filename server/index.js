import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import morgan from "morgan"
import dbConnection from "./utils/index.js"
import { errorHandler,routeNotFound } from "./middlewares/errorMiddleware.js"
import routes from "./routes/index.js"

dotenv.config()

dbConnection()

const PORT = process.env.PORT || 5000

const app=express()

app.use(cors({
    origin:["‎http://localhost:3000","‎http://localhost:3001"],
    methods:["GET","POST","PUT","DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials:true,
}))



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(morgan("dev"))
app.use("/api",routes)

app.get('/test', (req, res) => {
    res.json({ message: 'Server is working' })
})
app.use((req, res, next) => {
    console.log(`Request Params:`, req.params);
    next();
  });
  
app.use(routeNotFound)
app.use(errorHandler)


app.listen(PORT,()=>console.log(`server listening on ${PORT}`))



    
