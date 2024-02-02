import { createSlice } from "@reduxjs/toolkit";
import { CustomerInitialState } from "../states/customer.state";

const customerSlice = createSlice({
    name: 'customer',
    initialState: CustomerInitialState,
    reducers: {
        changeCustomerName(state, action) {

        },
        changeCustomerEmail(state, action) {
            state.customersList[action.payload.index].email = action.payload.email;
        },
        changeCustomerPhone(state, action) {
            state.customersList[action.payload.index].phone = action.payload.phone;
        },
        changeCustomerLocation(state, action) {
            state.customersList[action.payload.index].location = action.payload.location;
        },
        changeCustomerList(state, action) {
            state.customersList = action.payload;
        },
        changeCustomerSelected(state, action) {
            state.customerSelected = state.customersList.filter(el => el.id == action.payload)[0]
        }
    }
})

export const { changeCustomerEmail, changeCustomerLocation, changeCustomerName, changeCustomerPhone, changeCustomerList, changeCustomerSelected } = customerSlice.actions
export const customerReducer = customerSlice.reducer;