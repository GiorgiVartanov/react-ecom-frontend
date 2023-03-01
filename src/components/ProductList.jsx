import { useSelector } from "react-redux"

import { StyledProductList } from "./styles/StyledProductList"
import { useGetCartQuery } from "../features/api/apiSlice"

import Product from "./Product"
import Spinner from "./Spinner"

const ProductList = ({ products, isLoading }) => {
    const { user } = useSelector((state) => state.auth)

    const { data: cart } = useGetCartQuery(user.token)

    const cartItemIds = cart?.map((product) => product._id)

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
                    isInCart={cartItemIds?.includes(product._id)}
                    user={user}
                />
            ))}
        </StyledProductList>
    )
}
export default ProductList
