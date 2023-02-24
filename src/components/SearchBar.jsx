import { useSelector, useDispatch } from "react-redux"

import { StyledSearchBar } from "./styles/StyledSearchBar"

const SearchBar = ({ placeholder }) => {
    return (
        <StyledSearchBar
            type="search"
            placeholder={placeholder}
        />
    )
}
export default SearchBar
