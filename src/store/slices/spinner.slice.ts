import { createSlice } from "@reduxjs/toolkit";
import { SpinnerInitialState } from "../states/spinner.state";

const spinnerSlice = createSlice({
    name: 'spinner',
    initialState: SpinnerInitialState,
    reducers: {
        changeSpinner(state, action) {
            state.visible = action.payload
        }
    }
})

export const { changeSpinner } = spinnerSlice.actions
export const spinnerReducer = spinnerSlice.reducer