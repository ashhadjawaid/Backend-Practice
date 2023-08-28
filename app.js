require("dotenv").config()
const express = require("express");
const app = express();
const connectDB = require("./DB/connect")

const PORT = process.env.PORT || 5000;

const products_routers = require("./Routers/product_routes")

app.get("/", (req, res) => {
    res.send("Hello World!");
})

// MiddleWare or to set router

app.use("/api/products",products_routers )

const start = async() =>{
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,() =>{
            console.log(`${PORT} Yes I am connected`);
        })
    }
    catch(error)
    {
        console.log(error);
    }
}

start();