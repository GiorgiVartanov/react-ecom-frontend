import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { Page } from "../components/styles/Page"
import { getProducts, reset } from "../features/product/productSlice"

import ProductList from "../components/ProductList"
import Search from "../components/Search"

const Main = () => {
    const dispatch = useDispatch()

    const { products, isLoading, isError, isSuccess, errorMessage } =
        useSelector((state) => state.product)

    const { selectedCategory } = useSelector((state) => state.category)

    useEffect(() => {
        dispatch(getProducts(selectedCategory || "All"))
    }, [selectedCategory, dispatch])

    if (isError) {
        console.log(errorMessage)
        return <div>Error, check console for more information</div>
    }

    return (
        <Page>
            <Search />
            <ProductList
                isLoading={isLoading}
                products={products}
            />
        </Page>
    )
}
export default Main
