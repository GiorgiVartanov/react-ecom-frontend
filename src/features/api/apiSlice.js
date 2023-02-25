import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_URL }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: ({ category, title }) =>
                `product?category=${category}&title=${title}`,
        }),
        getProductById: builder.query({ query: (id) => `product/${id}` }),

        getProductCategories: builder.query({ query: () => `category` }),

        getCart: builder.query({
            query: (token) => ({
                url: "/cart/all",
                headers: { Authorization: `Bearer ${token}` },
            }),
        }),
        addToCart: builder.mutation({
            query: ({ token, productId }) => ({
                url: "cart",
                method: "POST",
                body: { id: productId },
                headers: { Authorization: `Bearer ${token}` },
            }),
        }),
        removeFromCart: builder.mutation({
            query: ({ token, productId }) => ({
                url: `cart/${productId}`,
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
            }),
        }),
    }),
})

export const {
    useGetAllProductsQuery,
    useGetProductByIdQuery,

    useGetProductCategoriesQuery,

    useGetCartQuery,
    useAddToCartMutation,
    useRemoveFromCartMutation,
} = productsApi
