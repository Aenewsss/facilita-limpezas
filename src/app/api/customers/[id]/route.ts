import { ICustomer } from "@/interfaces/customer.interface"
import customerService from "../customer-api.service"
import { NextResponse } from "next/server"
import customerApiService from "../customer-api.service"

export async function PUT(req: Request) {
    try {
        const { customer }: { customer: ICustomer } = await req.json()
        const result = await customerApiService.updateCustomer(customer.id!, customer)
        
        return NextResponse.json({ result })
    } catch (error) {
        return NextResponse.json({ error: error })
    }
}

export async function DELETE(req: Request, context: any) {
    try {
        const { params } = context
        const result = await customerApiService.deleteCustomer(params.id)
        return NextResponse.json({ result })
    } catch (error) {
        return NextResponse.json({ error: error })
    }
}

export async function GET(req: Request, context: any) {
    try {
        const { params } = context
        const result = await customerApiService.getCustomerById(params.id)
        return NextResponse.json({ result })
    } catch (error) {
        return NextResponse.json({ error: error })
    }
}