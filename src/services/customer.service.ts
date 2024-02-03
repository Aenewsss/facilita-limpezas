import { ApiRoutesEnum } from "@/enums/api-routes.enum"
import { HttpMethodsEnum } from "@/enums/http-methods.enum"
import { ICustomer } from "@/interfaces/customer.interface"
import { FormatResponse } from "@/utils/format-response.utils"

class CustomerService {
    async getAllCustomers(): Promise<ICustomer[]> {
        const response = await fetch(ApiRoutesEnum.CUSTOMERS, {
            headers: { "Content-Type": "application/json" },
            method: HttpMethodsEnum.GET,
        })
        console.log("\n line 13", await response.json())
        return await FormatResponse(response)
    }

    async getCustomerById(id: string): Promise<ICustomer> {
        const response = await fetch(ApiRoutesEnum.CUSTOMERS + `/${id}`, {
            headers: { "Content-Type": "application/json" },
            method: HttpMethodsEnum.GET,
        })
        return await FormatResponse(response)
    }
    async createCustomer(dto: ICustomer) {
        const response = await fetch(ApiRoutesEnum.CUSTOMERS, {
            headers: { "Content-Type": "application/json" },
            method: HttpMethodsEnum.POST,
            body: JSON.stringify({customer: dto})
        })
        return await FormatResponse(response)
    }
    async updateCustomer(id: string, dto: ICustomer) {
        const response = await fetch(ApiRoutesEnum.CUSTOMERS + `/${id}`, {
            headers: { "Content-Type": "application/json" },
            method: HttpMethodsEnum.PUT,
            body: JSON.stringify({customer: dto})
        })
        return await FormatResponse(response)
    }
    async deleteCustomer(id: string) {
        const response = await fetch(ApiRoutesEnum.CUSTOMERS + `/${id}`, {
            headers: { "Content-Type": "application/json" },
            method: HttpMethodsEnum.DELETE,
        })
        return await FormatResponse(response)
    }
}

export default new CustomerService()