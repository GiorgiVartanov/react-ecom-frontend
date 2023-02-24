import { StyledCategoryItem } from "./styles/StyledCategoryItem"

const CategoryItem = ({ name, isSelected, onClick }) => {
    return (
        <StyledCategoryItem
            isSelected={isSelected}
            onClick={onClick}
        >
            <span>{name}</span>
        </StyledCategoryItem>
    )
}
export default CategoryItem
