import { IShortestPath } from "@/interfaces/shortest-path.interface";

export const PathInitialState: IShortestPath = {
    path: [{ location: { x: 0, y: 0 } }],
    totalTraveled: 0
}