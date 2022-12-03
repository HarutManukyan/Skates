import {combineReducers} from "@reduxjs/toolkit";

import product from './slices/productSlice'

export const rootReducer = combineReducers({
    product
})