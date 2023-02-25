import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import productService from "./productService"

const initialState = {
    products: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    errorMessage: "",
}

export const getProducts = createAsyncThunk(
    "products/all",
    async ({ category, title }, thunkAPI) => {
        try {
            return await productService.getProducts({ category, title })
        } catch (error) {
            const errorMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toSting()

            return thunkAPI.rejectWithValue(errorMessage)
        }
    }
)

export const getProduct = createAsyncThunk(
    "products/single",
    async (id, thunkAPI) => {
        try {
            return await productService.getProduct(id)
        } catch (error) {
            const errorMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toSting()

            return thunkAPI.rejectWithValue(errorMessage)
        }
    }
)

export const productSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.isError = false
            state.isSuccess = false
            state.isLoading = false
            state.errorMessage = ""
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.products = action.payload
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.errorMessage = action.payload
                state.products = []
            })
    },
})

export const { reset } = productSlice.actions

export default productSlice.reducer
