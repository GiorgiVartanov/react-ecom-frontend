import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { Page } from "../components/styles/Page"
import { getProducts, reset } from "../features/product/productSlice"

import ProductList from "../components/ProductList"
import Search from "../components/Search"

const Main = () => {
    const [searchValue, setSearchValue] = useState("")

    const dispatch = useDispatch()

    const { products, isLoading, isError, isSuccess, errorMessage } =
        useSelector((state) => state.product)

    const { selectedCategory } = useSelector((state) => state.category)

    const handleOnChange = (e) => {
        setSearchValue(e.target.value)
    }

    useEffect(() => {
        // it will call 1.5s after user last typed

        const timer = setTimeout(() => {
            dispatch(
                getProducts({ category: selectedCategory, title: searchValue })
            )
        }, 1500)

        return () => clearTimeout(timer)
    }, [searchValue, dispatch])

    useEffect(() => {
        // it will call immediately after user changes category

        dispatch(
            getProducts({ category: selectedCategory, title: searchValue })
        )
    }, [selectedCategory, dispatch])

    if (isError) {
        console.log(errorMessage)
        return <div>Error, check console for more information</div>
    }

    return (
        <Page>
            <Search
                onChange={handleOnChange}
                value={searchValue}
            />
            <ProductList
                isLoading={isLoading}
                products={products}
            />
        </Page>
    )
}
export default Main
