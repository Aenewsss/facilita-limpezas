import { createSlice } from "@reduxjs/toolkit";
import { CustomerInitialState } from "../states/customer.state";

const customerSlice = createSlice({
    name: 'customer',
    initialState: CustomerInitialState,
    reducers: {
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
                if (el.id == action.payload.id) {
                    return {
                        ...action.payload
                    }
                } else return el
            })
            state.customersList = listUpdated
            state.customerSelected = CustomerInitialState.customerSelected
            state.editCustomer = CustomerInitialState.editCustomer
        },
        changeFilterCustomer(state, action) {
            state.filterCustomer = action.payload
        },
        pushCustomerToList(state,action){
            state.customersList.push(action.payload)
        }
    },
})

export const { pushCustomerToList,updateCustomerInList, changeFilterCustomer, changeCustomerList, changeCustomerSelected, changeEditCustomer, removeCustomerFromList } = customerSlice.actions
export const customerReducer = customerSlice.reducer;