import { ICustomer } from "@/interfaces/customer.interface";
import { NextResponse } from "next/server";
import customerService from "./customer.service";

export async function GET(request: Request) {
    console.log(await request.json())

    try {

        return NextResponse.json({ message: "Email sent" })
    } catch (error) {
        return NextResponse.json({ error: error })
    }
}

export async function POST(request: Request) {
    try {
        const { customer }: { customer: ICustomer } = await request.json()
        const result = await customerService.createCustomer(customer)
        return NextResponse.json({ newCustomer: result })
    } catch (error) {
        return NextResponse.json({ error: error })
    }
}

