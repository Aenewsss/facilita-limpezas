import { ICustomer } from "@/interfaces/customer.interface";
import { NextResponse } from "next/server";
import customerApiService from "./customer-api.service";

export async function GET(req: Request) {
    try {
        const result = await customerApiService.getAllCustomers()
        return NextResponse.json({ result })
    } catch (error) {
        return NextResponse.json({ error: error })
    }
}

export async function POST(req: Request) {
    try {
        const { customer } = await req.json()
        console.log('18', customer)
        const result = await customerApiService.createCustomer(customer)
        NextResponse.json({ newCustomer: result })
    } catch (error) {
        return NextResponse.json({ error: 'Erro ao tentar cadastrar cliente' })
    }
}

