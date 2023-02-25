import { Routes, Route, Navigate } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import GlobalStyles from "./components/styles/Global"

import Main from "./pages/Main.page"
import Cart from "./pages/Cart.page"
import Product from "./pages/Product.page"
import Login from "./pages/Login.page"
import Register from "./pages/Register.page"

import Header from "./components/Header"

export const App = () => {
    return (
        <div className="App">
            <GlobalStyles />
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Navigate
                            to="/shop"
                            replace={true}
                        />
                    }
                />
                <Route
                    index
                    path="/shop"
                    element={<Main />}
                />
                <Route
                    path="/cart"
                    element={<Cart />}
                />
                <Route
                    path="/shop/:id"
                    element={<Product />}
                />
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/register"
                    element={<Register />}
                />
            </Routes>
            <ToastContainer />
        </div>
    )
}

export default App
