import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import categoryService from "./categoryService"

const selectedCategory =
    JSON.parse(localStorage.getItem("selectedCategory")) || ""

const initialState = {
    categories: [],
    selectedCategory: selectedCategory ? selectedCategory : "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    errorMessage: "",
}

export const getCategories = createAsyncThunk(
    "category/getAll",
    async (_, thunkAPI) => {
        try {
            return await categoryService.getCategories()
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

export const selectCategory = createAsyncThunk(
    "category/select",
    async (category) => {
        return await categoryService.selectCategory(category)
    }
)

export const categorySlice = createSlice({
    name: "category",
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
            .addCase(getCategories.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.categories = action.payload
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.errorMessage = action.payload
                state.categories = []
            })

            .addCase(selectCategory.fulfilled, (state, action) => {
                state.selectedCategory = action.payload
            })
    },
})

export const { reset } = categorySlice.actions
export default categorySlice.reducer
