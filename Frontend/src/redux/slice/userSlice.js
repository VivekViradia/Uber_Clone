import { createSlice } from "@reduxjs/toolkit"

const initialState = {
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

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducer: {
        UpdateUserDetails: (state, action) => {
            console.log('STATE VALUE: ', state)
            console.log('ACTION VALUE: ',value)
            state = action.payload
        }
    }
})

export const userActions = UserSlice.actions;
export default UserSlice.reducer;