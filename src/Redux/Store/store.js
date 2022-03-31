import { configureStore } from "@reduxjs/toolkit";
import mainProductSlice from "../mainProductSlice/mainProductSlice";
import productSlice from "../productSlice/productSlice";
import counterSlice from "../CounterSlice/counterSlice";
import { counter } from "@fortawesome/fontawesome-svg-core";
export const store = configureStore({

    
    reducer: {

        products:productSlice,
        mainProd:mainProductSlice,
        counter:counterSlice,
    }
})

