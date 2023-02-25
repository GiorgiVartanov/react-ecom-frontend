import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { Page } from "../components/styles/Page"
import { getProducts, reset } from "../features/product/productSlice"
import { useGetAllProductsQuery } from "../features/api/apiSlice"

import ProductList from "../components/ProductList"
import Search from "../components/Search"

const Main = () => {
    const [searchValue, setSearchValue] = useState("")

    const { selectedCategory } = useSelector((state) => state.category)

    const {
        data: products,
        isLoading,
        error,
    } = useGetAllProductsQuery({
        category: selectedCategory,
        title: searchValue,
    })

    const handleOnChange = (e) => {
        setSearchValue(e.target.value)
    }

    if (error) {
        console.log(error)
        return <div>Error, check console for more information</div>
    }

    return (
        <Page>
            <Search
                onChange={handleOnChange}
                value={searchValue}
            />
            <ProductList
                products={products}
                isLoading={isLoading}
            />
        </Page>
    )
}
export default Main
