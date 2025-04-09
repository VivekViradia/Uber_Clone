import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userDetails: {
        fullName: {
            firstName: "",
            lastName: ""
        },
        email: "",
        password: "",
        status: "",
        vehicle: {
            color: "",
            plateNumber: "",
            capacity: 0,
            vehicleType: ""
        },
        captionId: 0,
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        UpdateUserDetails(state, action) {
            // Update the user details in the state
            state.userDetails = action.payload;
        },
    }
})

export const userActions = userSlice.actions;
export default userSlice.reducer;