import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_URL }),
    tagTypes: ["Product", "Category", "Cart"],
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: ({ category, title }) =>
                `product?category=${category}&title=${title}`,
            providesTags: ["Product"],
        }),
        getProductById: builder.query({ query: (id) => `product/${id}` }),

        getProductCategories: builder.query({
            query: () => `category`,
            providesTags: ["Categories"],
        }),

        getCart: builder.query({
            query: (token) => ({
                url: "/cart/all",
                headers: { Authorization: `Bearer ${token}` },
            }),
            providesTags: ["Cart"],
        }),
        addToCart: builder.mutation({
            query: ({ token, productId }) => ({
                url: "cart",
                method: "POST",
                body: { productId: productId },
                headers: { Authorization: `Bearer ${token}` },
            }),
            invalidatesTags: ["Cart"],
        }),
        removeFromCart: builder.mutation({
            query: ({ token, productId }) => ({
                url: `cart/${productId}`,
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
            }),
            invalidatesTags: ["Cart"],
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
