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
        },
        changeEditCustomer(state, action) {
            state.editCustomer = action.payload
        },
        removeCustomerFromList(state, action) {
            const withoutDeleted = state.customersList.filter(el => el.id !== action.payload)
            state.customersList = withoutDeleted
            state.customerSelected = CustomerInitialState.customerSelected
        },
        updateCustomerInList(state, action) {
            const listUpdated = state.customersList.map(el => {
                if (el.id == action.payload.customer.id) {
                    return {
                        ...action.payload.customer
                    }
                }
            })
            state.customersList = listUpdated
            state.customerSelected = CustomerInitialState.customerSelected
            state.editCustomer = CustomerInitialState.editCustomer
        },
        filterCustomer(state, action) {
            state.filterCustomer = action.payload
        }
    },
})

export const { updateCustomerInList, filterCustomer, changeCustomerEmail, changeCustomerLocation, changeCustomerName, changeCustomerPhone, changeCustomerList, changeCustomerSelected, changeEditCustomer, removeCustomerFromList } = customerSlice.actions
export const customerReducer = customerSlice.reducer;