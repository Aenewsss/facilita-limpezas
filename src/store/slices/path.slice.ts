import { createSlice } from "@reduxjs/toolkit";
import { PathInitialState } from "../states/path.state";

const pathSlice = createSlice({
    name: 'path',
    initialState: PathInitialState,
    reducers: {
        changeShortestPath(state, action) {
            state.path = action.payload.path
            state.totalTraveled = action.payload.totalTraveled
        }
    }
})

export const { changeShortestPath } = pathSlice.actions
export const pathReducer = pathSlice.reducer