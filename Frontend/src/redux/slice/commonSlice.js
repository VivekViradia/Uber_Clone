import { createSlice } from "@reduxjs/toolkit"

const initialvalue = {
    isModelOpen: false,
    loginModel: {
        isOpen: false,
        type: '',
    }
}

export const commonSlice = createSlice({
    name: 'common',
    initialState: initialvalue,
    reducers: {
        showModel: (state, action) => {
            state.isModelOpen = action.payload
        },
        showLoginModel: (state, action) => {
            state.loginModel.isOpen = action.payload.isOpen
            state.loginModel.type = action.payload.type
        }
    }
})

export const commonActions = commonSlice.actions;
export default commonSlice.reducer;