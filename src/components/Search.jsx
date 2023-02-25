import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { StyledSearch } from "./styles/StyledSearch"
import { selectCategory } from "../features/category/categorySlice"
import { useGetProductCategoriesQuery } from "../features/api/apiSlice"

import SearchBar from "./SearchBar"
import CategoryItem from "./CategoryItem"

const Search = ({ onChange, value }) => {
    const dispatch = useDispatch()

    const { selectedCategory } = useSelector((state) => state.category)

    const {
        data: categories,
        isLoading,
        error,
    } = useGetProductCategoriesQuery()

    const handleOnClick = (e) => {
        dispatch(selectCategory(e.target.textContent))
    }

    if (isLoading) return

    return (
        <StyledSearch>
            <SearchBar
                onChange={onChange}
                value={value}
                placeholder="search 🔍"
            />
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
