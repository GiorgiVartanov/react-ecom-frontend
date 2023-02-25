import { useSelector, useDispatch } from "react-redux"

import { StyledSearchBar } from "./styles/StyledSearchBar"

const SearchBar = ({ placeholder, onChange, value }) => {
    return (
        <StyledSearchBar
            type="search"
            onChange={onChange}
            value={value}
            placeholder={placeholder}
        />
    )
}
export default SearchBar
