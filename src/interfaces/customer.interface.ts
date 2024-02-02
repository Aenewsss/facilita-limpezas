import { ILocation } from "./location.interface";

export interface ICustomer {
    id?: string;
    name: string;
    email: string;
    phone: string;
    location: ILocation
}