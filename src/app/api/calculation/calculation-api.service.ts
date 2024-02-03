import { ICustomer } from "@/interfaces/customer.interface"
import { ILocation } from "@/interfaces/location.interface"
import { IPoint } from "@/interfaces/point.interface"

class CalculationApiService {
    getShortestPath(customers: ICustomer[]) {
        const initialPoint: IPoint = { location: { x: 0, y: 0 } }

        const path: IPoint[] = [initialPoint]
        const unvisitedCustomers: IPoint[] = customers.slice().map(el => ({ location: el.location, userId: el.id, userName: el.name }))

        while (unvisitedCustomers.length > 0) {
            const lastPoint = path[path.length - 1]
            let nearestPoint!: IPoint
            let shortestDistance: number = Infinity

            for (const point of unvisitedCustomers) {
                const distance = this.mathFormulaToCalcDistance(lastPoint.location, point.location)

                if (distance < shortestDistance) {
                    nearestPoint = { ...point, distanceFromLastPoint: distance }
                    shortestDistance = distance
                }
            }

            path.push(nearestPoint)
            unvisitedCustomers.splice(unvisitedCustomers.indexOf(nearestPoint), 1)
        }

        path.push({ ...initialPoint, distanceFromLastPoint: this.mathFormulaToCalcDistance(initialPoint.location, path[path.length - 1].location) })

        const totalTraveled = path.reduce((acc, curr) => acc += curr.distanceFromLastPoint || 0, 0)

        return { path, totalTraveled }
    }

    private mathFormulaToCalcDistance(pointA: ILocation, pointB: ILocation) {
        return Number(Math.sqrt(Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2)).toFixed(2))
    }
}

export default new CalculationApiService()