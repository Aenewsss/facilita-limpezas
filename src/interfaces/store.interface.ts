import { ICustomer } from "./customer.interface";
import { ICustomerRedux } from "./customers-redux.interface";

export interface IStore {
    customer: ICustomerRedux
}