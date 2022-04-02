import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modal: false,
}


const cartModalSlice = createSlice({
    initialState,
    name: "modal",
    reducers: {

        setModal: (state) => {
            state.modal = true
        },
        closeModal:(state)=>{
            state.modal = false
        }

    }
})



export const selectModal = (state)=>state.modal.modal
export const {setModal,closeModal} = cartModalSlice.actions

export default cartModalSlice.reducer