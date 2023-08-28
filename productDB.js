require("dotenv").config();
const connectDB = require("./DB/connect");
const Product = require("./Models/product");

const ProductJSON = require("./product.json");

const start = async () =>{
    try {
        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany();
        await Product.create(ProductJSON);
        console.log("successfully created");
    } catch (error) {
        console.log(error);
    }
}

start();