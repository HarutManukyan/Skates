import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    product: {},
    showCart: false
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct: (state, { payload }) => {
            state.product = payload
        },
        setCart: (state, { payload }) => {
            state.showCart = payload
        }
    }
})

export const { setProduct, setCart } = productSlice.actions

export const productSelector = state => state.product.product
export const showCartSelector = state => state.product.showCart

export default productSlice.reducer