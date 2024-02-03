"use client"
import { ApiRoutesEnum } from "@/enums/api-routes.enum";
import { HttpMethodsEnum } from "@/enums/http-methods.enum";
import { ICustomer } from "@/interfaces/customer.interface";
import customerService from "@/services/customer.service";
import { useEffect, useState } from "react";

const CustomersList = () => {

    const [customers, setCustomers] = useState<ICustomer[]>();

    useEffect(() => {
        async function getCustomers() {
            const result = await customerService.getAllCustomers()
            setCustomers(result)
        }
        getCustomers()
    }, []);

    return (
        <div className="d-flex flex-column gap-4 ">
            {
                customers?.map(customer => (
                    <div key={customer.id} className="box-shadow p-2 rounded position-relative px-4 scale" role="button">
                        <p className="position-absolute start-0 ms-2">{customer.id}</p>
                        <h3 className="text-center fw-normal">{customer.name}</h3>
                    </div>
                ))
            }
        </div>
    );
}

export default CustomersList;