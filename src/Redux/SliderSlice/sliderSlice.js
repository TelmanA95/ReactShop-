import { createSlice } from "@reduxjs/toolkit";



const initialState = {

    images: ["https://cdn.shopify.com/s/files/1/2090/4191/files/Fall16_05_8eb3632b-d46a-4e55-85c7-43fd12de7f00.jpg?v=1568217718",
        "https://cdn.shopify.com/s/files/1/2090/4191/files/epic_viking_wide_lighter_ae2051e7-c287-4b3d-9346-b51c5061671d_1950x.jpg?v=1637926414",
        "https://cdn.shopify.com/s/files/1/2090/4191/files/slide4_9d4a593c-90b1-4fa6-8dc1-acdc2bdccce1_1950x.jpg?v=1613996510",
    ]

}



const sliderSlice = createSlice({
    initialState,
    name: "slider",

})


export const selectImages = (state) => state.slider.images

export default sliderSlice.reducer
