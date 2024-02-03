import { configureStore } from "@reduxjs/toolkit";
import { customerReducer } from "./slices/customer.slice";

export const store = configureStore({
    reducer: {
        customer: customerReducer,
    }
})