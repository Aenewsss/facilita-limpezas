import { ICustomer } from "@/interfaces/customer.interface"
import customerService from "./customer-api.service"
import { NextResponse } from "next/server"

export async function PUT(req: Request) {
    try {
        const { customer }: { customer: ICustomer } = await req.json()
        const result = await customerService.createCustomer(customer)
        return NextResponse.json({ newCustomer: result })
    } catch (error) {
        return NextResponse.json({ error: error })
    }
}

export async function DELETE(req: Request) {
    try {
        // const result = await customerService.deleteCustomer(req.params.id)
        // return NextResponse.json({ newCustomer: result })
    } catch (error) {
        return NextResponse.json({ error: error })
    }
}

export async function GET(req: Request) {
    try {
        // const result = await customerService.getCustomerById(req.params.id)
        // return NextResponse.json({ result })
    } catch (error) {
        return NextResponse.json({ error: error })
    }
}