import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    captionDetails: {
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
        UpdateCaptionDetails(state, action) {
            // Update the user details in the state
            state.captionDetails.fullName = action.payload.fullName;
            state.captionDetails.email = action.payload.email;
            state.captionDetails.password = action.payload.password;
            state.captionDetails.status = action.payload.status;
        },
    }
})

export const userActions = userSlice.actions;
export default userSlice.reducer;