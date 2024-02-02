import { ILocation } from "./location.interface"

export interface IPoint {
    userId?: string;
    location: ILocation;
    distanceFromLastPoint?: number;
}