import { configureStore } from "@reduxjs/toolkit";
import { customerReducer } from "./slices/customer.slice";
import { pathReducer } from "./slices/path.slice";
import { spinnerReducer } from "./slices/spinner.slice";

export const store = configureStore({
    reducer: {
        customer: customerReducer,
        path: pathReducer,
        spinner: spinnerReducer
    }
})