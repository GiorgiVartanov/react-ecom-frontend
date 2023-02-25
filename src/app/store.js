import { configureStore } from "@reduxjs/toolkit"

import { productsApi } from "../features/api/apiSlice"

import authReducer from "../features/auth/authSlice"
import productReducer from "../features/product/productSlice"
import categoryReducer from "../features/category/categorySlice"

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        auth: authReducer,
        // product: productReducer,
        category: categoryReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})
