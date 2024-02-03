import { configureStore } from "@reduxjs/toolkit";
import { customerReducer } from "./slices/customer.slice";
import { pagesReducer } from "./slices/pages.slice";

export const store = configureStore({
    reducer: {
        customer: customerReducer,
        pages: pagesReducer
    }
})