import { StyledProductList } from "./styles/StyledProductList"

import Product from "./Product"
import Spinner from "./Spinner"

const ProductList = ({ products, isLoading }) => {
    if (isLoading) return <Spinner />

    return (
        <StyledProductList>
            {products.map((product) => (
                <Product
                    key={product._id}
                    id={product._id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    category={product.category}
                    image={product.image}
                    rating={product.rating}
                />
            ))}
        </StyledProductList>
    )
}
export default ProductList
