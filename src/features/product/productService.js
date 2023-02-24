import axios from "axios"

const API_URL = process.env.REACT_APP_BACKEND_URL

// get products
const getProducts = async (category) => {
    const searchCategory = category === "All" || !category ? "" : category

    const response = await axios.get(
        `${API_URL}/product?category=${searchCategory}`
    )

    return response.data
}

const productService = { getProducts }

export default productService
