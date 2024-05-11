const db = require("./Mongo/db")
const express = require("express")
const app=express()
const cors =require("cors");

app.listen(8000,()=>{
    console.log(`server runs in ${process.env.PORT}`)
})
app.use(cors({
    origin: ["https://frontend-omega-nine-33.vercel.app"],
    methods: ["POST", "GET"],
     credentials: true
}
))

app.use(express.json())

app.get("/",cors(),(req,res)=>{

})

app.post("/",(req,res)=>{
    res.send({"msg":"hello"});
})