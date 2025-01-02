import productModel from "../models/productsModel.js"


const productCategories = ["jewelery", "men's clothing", "electronics", "women's clothing", "all"]

const getProductDetails = async (request, response) => {
    try {
        const { id } = request.params
        if (!id) {
            return response.status(400).json({ status: "400", message: "Id is manadatory" })
        }
        const product = await productModel.findById(id)
        if (!product) {
            return response.status(400).json({ status: 400, message: "No product found with these id." })
        }
        return response.status(200).json({ status: 200, message: "Product fecthed successfully", data: product })

    } catch (error) {
        response.status(500).json({ status: 500, message: "Internal or External server error" })
    }
}

const getAllProducts = async (request, response) => {
    try {
        const { category } = request.query
        const isvalidCategory = productCategories.includes(category)
        if (!isvalidCategory) {
            return response.status(400).json({ status: 400, message: "Invalid Product category" })
        }
        let products;
        if (category == "all") {
            products = await productModel.find()
        }
        else {
            products = await productModel.find({ category: category })
        }
        return response.status(200).json({ status: 200, message: "Products fetched successfully", data: products })
    } catch (err) {
   
        return response.status(500).json({ status: 500, message: "Internal or External server error" })
    }
}


export { getProductDetails, getAllProducts }