import { Link } from "react-router-dom"

import { StyledProduct } from "./styles/StyledProduct"

const Product = ({ id, title, image, price }) => {
    return (
        <StyledProduct
            image={image}
            title={title}
        >
            <Link to={`/shop/${id}`}>
                <div className="image"></div>
                <div className="product-text">
                    <h2>
                        {title.length > 43
                            ? title.substring(0, 40) + "..."
                            : title}
                    </h2>
                    <div className="price">{price} $</div>
                </div>
            </Link>
        </StyledProduct>
    )
}
export default Product
