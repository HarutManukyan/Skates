import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {},
    total: 0
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.user = payload
        },
        setTotal: (state, { payload }) => {
            state.total = payload
        }
    }
})

export const { setUser, setTotal } = userSlice.actions

export const userSelector = state => state.user.user
export const totalSelector = state => state.user.total

export default userSlice.reducer