import { NextResponse } from "next/server"
import customerApiService from "../customers/customer-api.service"
import calculationApiService from "./calculation-api.service"

export async function GET(req: Request) {
    try {
        const customers = await customerApiService.getAllCustomers()
        const result = calculationApiService.getShortestPath(customers)

        return NextResponse.json({ result })
    } catch (error) {
        return NextResponse.json({ error: error })
    }
}