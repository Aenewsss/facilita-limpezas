import { ICustomer } from "./customer.interface";
import { ICustomerRedux } from "./customers-redux.interface";
import { IPages } from "./pages.interface";
import { IShortestPath } from "./shortest-path.interface";

export interface IStore {
    customer: ICustomerRedux;
    path: IShortestPath;
}