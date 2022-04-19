import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mobile: false,
    
}


const mobileMenuSlice = createSlice({
    initialState,
    name: "mobile",
    reducers: {

        openMobile: (state) => {
            state.mobile = !state.mobile
        },
        closeMobile: (state) => {
            state.mobile = !state.mobile

        },
    }
       
})

export const selectMobile = (state) => state.mobile.mobile

export const { openMobile,closeMobile  } = mobileMenuSlice.actions




export default mobileMenuSlice.reducer
