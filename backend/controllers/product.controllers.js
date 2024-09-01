const productModel = require("./../models/productsModel")


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
        return response.status(400).json({ status: 200, message: "Product fecthed successfully", data: product })

    } catch (error) {
        response.status(500).json({ status: 500, message: "Internal or External server error" })
    }
}

const getAllProducts = async (request, response) => {
    try {
        const products = await productModel.find()
        return response.status(200).json({ status: 200, message: "Products fetched successfully", data: products })
    } catch (err) {
        console.log(err)
        return response.status(500).json({ status: 500, message: "Internal or External server error" })
    }
}


module.exports = { getProductDetails, getAllProducts }