import { ICustomer } from "@/interfaces/customer.interface";
import { ICustomerRedux } from "@/interfaces/customers-redux.interface";

export const CustomerInitialState: ICustomerRedux = {
    customersList: [{
        id: '',
        email: '',
        name: "",
        phone: "",
        location: {
            x: 0,
            y: 0,
        },
    }],
    editCustomer: false
}