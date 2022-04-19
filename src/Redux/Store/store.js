import { configureStore } from "@reduxjs/toolkit";
import mainProductSlice from "../mainProductSlice/mainProductSlice";
import productSlice from "../productSlice/productSlice";
import counterSlice from "../CounterSlice/counterSlice";
import cartModalSlice from "../CartModalSlice/cartModalSlice";
import sliderSlice from "../SliderSlice/sliderSlice";
import mobileMenuSlice from "../mobileMenuSlice/mobileMenuSlice";

export const store = configureStore({


    reducer: {

        products: productSlice,
        mainProd: mainProductSlice,
        counter: counterSlice,
        cart: cartModalSlice,
        slider: sliderSlice,
        mobile: mobileMenuSlice,
    }
})

