import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        name: null,
        email: null
    },
    reducers: {
        setAuthDetails: (state, action) => {
            const {name, email} = action.payload
            state.name = name;
            state.email = email;
        },
        clearAuthDetails: (state) => {
            state.name = null;
            state.email = null;
        }
    }
})

export const {setAuthDetails, clearAuthDetails} = authSlice.actions
export default authSlice.reducer