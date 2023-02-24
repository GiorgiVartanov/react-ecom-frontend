import axios from "axios"

const API_URL = process.env.REACT_APP_BACKEND_URL

const getCategories = async () => {
    const response = await axios.get(`${API_URL}/category`)

    return response.data
}

const selectCategory = async (category) => {
    let newCategory

    const oldSelectedCategory = JSON.parse(
        localStorage.getItem("selectedCategory")
    )

    if (category === oldSelectedCategory) {
        newCategory = ""
    } else {
        newCategory = category
    }

    localStorage.setItem("selectedCategory", JSON.stringify(newCategory))
    return newCategory
}

const categoryService = { getCategories, selectCategory }

export default categoryService
