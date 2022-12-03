import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    product: {}
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct: (state, { payload }) => {
            state.product = payload
        }
    }
})

export const { setProduct } = productSlice.actions

export const productSelector = state => state.product.product

export default productSlice.reducer