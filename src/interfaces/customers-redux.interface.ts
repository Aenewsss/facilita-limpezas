import { ICustomer } from "./customer.interface";

export interface ICustomerRedux {
    customersList: ICustomer[];
    customerSelected?: ICustomer;
    editCustomer?: boolean;
    filterCustomer?: string;
}