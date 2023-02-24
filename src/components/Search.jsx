import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { StyledSearch } from "./styles/StyledSearch"
import {
    getCategories,
    selectCategory,
} from "../features/category/categorySlice"

import SearchBar from "./SearchBar"
import CategoryItem from "./CategoryItem"

const Search = () => {
    const dispatch = useDispatch()

    const {
        categories,
        selectedCategory,
        isLoading,
        isError,
        isSuccess,
        errorMessage,
    } = useSelector((state) => state.category)

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const handleOnClick = (e) => {
        // console.log(e.target.textContent)
        dispatch(selectCategory(e.target.textContent))
    }

    // if (isLoading) return

    return (
        <StyledSearch>
            <SearchBar placeholder="search 🔍" />
            <div className="category-list">
                {categories.map((category) => (
                    <CategoryItem
                        key={category}
                        name={category}
                        isSelected={selectedCategory === category}
                        onClick={handleOnClick}
                    />
                ))}
            </div>
        </StyledSearch>
    )
}
export default Search
