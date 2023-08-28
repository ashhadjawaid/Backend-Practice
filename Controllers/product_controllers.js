const Product = require("../Models/product")

const getAllProducts = async (req, res) => {

    const {company, name, featured, sort, select} = req.query;
    const queryObj = {};

    if(company){
        queryObj.company = company;
    }

    if(name){
        queryObj.name = { $regex: name, $options: "i"}
    }

    if(featured){
        queryObj.featured = { $regex: featured, $options: "i"}
    }

    let apiData = Product.find(queryObj)

    //sort functionality

    if(sort){
        let sortFix = sort.replace(",", " ")
        apiData = apiData.sort=(sortFix)
    }

    //select functionality

    if(select){
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix)
    }


    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit)  ||10;

        //Pagination Formula

    let skip = (page -1) * limit;
    apiData = apiData.skip(skip).limit(limit);

    const Products = await apiData;
    res.status(200).json({Products, nbHits: Products.length})
}

const getAllProductsTesting = async (req, res) => {
    const myData = await Product.find(req.query).sort("name") //sort by name ascending
    res.status(200).json({myData})
}
module.exports = {
    getAllProducts,
    getAllProductsTesting
}