import { ILocation } from "./location.interface"

export interface IPoint {
    userId?: string;
    userName?: string;
    location: ILocation;
    distanceFromLastPoint?: number;
}