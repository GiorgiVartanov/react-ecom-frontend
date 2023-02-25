import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { StyledProductPage } from "../components/styles/StyledProductPage"

import Spinner from "../components/Spinner"

const Product = () => {
    const { id } = useParams()

    const { products, isLoading, isError, isSuccess, errorMessage } =
        useSelector((state) => state.product)

    const product = products.filter((product) => product._id === id)[0]

    if (isError) {
        console.log(errorMessage)
        return <div>Error, check console for more information</div>
    }

    if (isLoading) return <Spinner />

    return (
        <StyledProductPage>
            <img
                src={product.image}
                alt={product.name}
            />
            <div className="product-text">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
            </div>
        </StyledProductPage>
    )
}
export default Product
