import { ICustomer } from "./customer.interface";
import { ICustomerRedux } from "./customers-redux.interface";
import { IPages } from "./pages.interface";

export interface IStore {
    customer: ICustomerRedux;
    pages: IPages
}