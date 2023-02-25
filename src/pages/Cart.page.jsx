import { useDispatch, useSelector } from "react-redux"

import { useGetCartQuery } from "../features/api/apiSlice"
import { Page } from "../components/styles/Page"

import ProductList from "../components/ProductList"

const Cart = () => {
    const { user } = useSelector((state) => state.auth)

    const { data: cart, isLoading, error } = useGetCartQuery(user.token)

    let totalPrice = 0
    cart?.forEach((product) => {
        totalPrice += product.price
    })

    return (
        <Page>
            Cart
            <ProductList
                products={cart}
                isLoading={isLoading}
            />
            <div className="total-price">{totalPrice}</div>
        </Page>
    )
}
export default Cart
