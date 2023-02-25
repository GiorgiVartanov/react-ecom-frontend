import axios from "axios"

const API_URL = process.env.REACT_APP_BACKEND_URL

// get products
const getProducts = async ({ category, title }) => {
    const response = await axios.get(
        `${API_URL}/product?category=${category}&title=${title}`
    )

    return response.data
}

// get single product
const getProduct = async (id) => {
    const response = await axios.get(`${API_URL}/product/${id}`)
}

const productService = { getProducts, getProduct }

export default productService
