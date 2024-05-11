const db = require("./Mongo/db")
const express = require("express")
const app=express()
const cors =require("cors");
const datas = require("./Mongo/scheme")

app.listen(8000,()=>{
    console.log(`server runs in ${process.env.PORT}`)
})
app.use(cors({
    // origin: ["https://frontend-omega-nine-33.vercel.app"],
    // methods: ["POST", "GET"],
    //  credentials: true
}
))

app.use(express.json())

app.get("/",(req,res)=>{
    res.json("hello")
})

app.post("/datas",async (req,res)=>{
    const data=await datas.find();
    res.send(data[0]);
})

app.post("/update",async (req,res)=>{
    const update=req.body;
    await datas.updateOne({},update)
    res.send(update);
})