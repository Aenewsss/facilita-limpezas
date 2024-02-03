import { createSlice } from "@reduxjs/toolkit";
import { PagesInitialState } from "../states/pages.state";

const pagesSlice = createSlice({
    name: 'pages',
    initialState: PagesInitialState,
    reducers: {
        changeCurrentPage(state, action) {
            state.currentPage = action.payload
        }
    }
})

export const { changeCurrentPage } = pagesSlice.actions
export const pagesReducer = pagesSlice.reducer