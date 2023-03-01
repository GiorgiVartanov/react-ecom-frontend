import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import {
    HiExternalLink,
    HiOutlineExternalLink,
    HiStar,
    HiShoppingCart,
    HiOutlineStar,
    HiOutlineShoppingCart,
} from "react-icons/hi"
import { toast } from "react-toastify"

import { StyledProduct } from "./styles/StyledProduct"
import { StyledProductCardButton } from "./styles/StyledProductCardButton"
import { useOnClickOutside } from "../hooks/useOnClickOutside"
import {
    useAddToCartMutation,
    useRemoveFromCartMutation,
} from "../features/api/apiSlice"

const Product = ({ id, title, image, price, isInCart, user }) => {
    const [isActive, setIsActive] = useState(false)

    const ref = useRef()

    const [addToCart] = useAddToCartMutation()
    const [removeFromCart] = useRemoveFromCartMutation()

    const handleClick = () => {
        setIsActive((prev) => !prev)
    }

    const handleAddToCart = (e) => {
        if (isInCart) {
            removeFromCart({
                token: user.token,
                productId: id,
            })
                .unwrap()
                .then(() => toast.success("Successfully removed from the cart"))
                .catch((rejected) => toast.error(rejected.data.message))
        } else {
            addToCart({
                token: user.token,
                productId: id,
            })
                .unwrap()
                .then(() => toast.success("Successfully added to the cart"))
                .catch((rejected) => toast.error(rejected.data.message))
        }

        e.stopPropagation()
    }

    const handleAddToFavorite = () => {
        console.log("adding to favorite")
    }

    const handleClickOutside = (e) => {
        setIsActive(false)
    }

    useOnClickOutside(ref, handleClickOutside)

    const renderProductForUnloginedUser = () => (
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

    const renderProductForLoggedInUser = () => (
        <StyledProduct
            image={image}
            title={title}
            isActive={isActive}
            ref={ref}
            onClick={handleClick}
        >
            <div>
                <div className="image">
                    {isActive ? (
                        <ul className="product-buttons">
                            <StyledProductCardButton>
                                <button onClick={handleAddToFavorite}>
                                    <HiOutlineStar size={32} />
                                </button>
                            </StyledProductCardButton>
                            <StyledProductCardButton>
                                <button onClick={handleAddToCart}>
                                    {isInCart ? (
                                        <HiShoppingCart size={32} />
                                    ) : (
                                        <HiOutlineShoppingCart size={32} />
                                    )}
                                </button>
                            </StyledProductCardButton>
                            <StyledProductCardButton>
                                <Link to={`/shop/${id}`}>
                                    <HiExternalLink size={32} />
                                </Link>
                            </StyledProductCardButton>
                        </ul>
                    ) : (
                        ""
                    )}
                </div>
                <div className="product-text">
                    <h2>
                        {title.length > 43
                            ? title.substring(0, 40) + "..."
                            : title}
                    </h2>
                    <div className="price">{price} $</div>
                </div>
            </div>
        </StyledProduct>
    )

    return user
        ? renderProductForLoggedInUser()
        : renderProductForUnloginedUser()
}
export default Product
