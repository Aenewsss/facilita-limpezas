import db from "@/config/database"
import { ICustomer } from "@/interfaces/customer.interface"

class CustomerService {
    async getAllCustomers(): Promise<ICustomer[]> {
        return (await db.query("SELECT * FROM customers")).rows
    }

    async getCustomerById(id: string) {
        return (await db.query(`SELECT * FROM customers WHERE id = ${id}`)).rows
    }
    async createCustomer(dto: ICustomer) {
        return await db.query(`
            INSERT INTO customers (name, email, phone, location)
            VALUES ('${dto.name}', '${dto.email}', '${dto.phone}','${JSON.stringify(dto.location)}')
        `)
    }
    async updateCustomer(id: string, dto: ICustomer) {
        return await db.query(`
            UPDATE customers 
            SET name = '${dto.name}', email = '${dto.email}', phone = '${dto.phone}', location = '${JSON.stringify(dto.location)}')
            WHERE id = ${id}
        `)
    }
    async deleteCustomer(id: string) {
        return await db.query(`DELETE FROM customers WHERE id = ${id}`)
    }
}

export default new CustomerService()