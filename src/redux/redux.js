import {combineReducers} from "@reduxjs/toolkit";

import product from './slices/productSlice'
import user from './slices/userSlice'

export const rootReducer = combineReducers({
    product,
    user
})