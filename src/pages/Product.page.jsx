import { useParams } from "react-router-dom"

import { StyledProductPage } from "../components/styles/StyledProductPage"

const Product = () => {
    const { id } = useParams()

    // const {
    //     data: product,
    //     isLoading,
    //     isSuccess,
    //     isError,
    //     error,
    // } = useGetProductByIdQuery(id)

    // if (isError) {
    //     console.log(error)
    //     return <div>Error, check console for more information</div>
    // }

    // if (isLoading) return <div>Loading...</div>

    // console.log(product)

    return (
        <StyledProductPage>
            {/* <img
                src={product.image}
                alt={product.name}
            />
            <div className="product-text">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
            </div> */}
        </StyledProductPage>
    )
}
export default Product
