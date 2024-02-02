"use client"
import { ICustomer } from "@/interfaces/customer.interface";
import customerService from "@/services/customer.service";
import { changeCustomerList, changeCustomerSelected } from "@/store/slices/customer.slice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const CustomersNameList = () => {

    const dispatch = useDispatch()

    const [customers, setCustomers] = useState<ICustomer[]>();

    useEffect(() => {
        async function getCustomers() {
            const result = await customerService.getAllCustomers()
            setCustomers(result)
            dispatch(changeCustomerList(result))
        }
        getCustomers()
    }, []);

    function chooseCustomer(customerId: string) {
        dispatch(changeCustomerSelected(customerId))
    }

    return (
        <div className="d-flex flex-column gap-4 ">
            {
                customers?.map(customer => (
                    <div key={customer.id} onClick={() => chooseCustomer(customer.id!)} className="box-shadow p-2 rounded position-relative px-4 scale" role="button">
                        <p className="position-absolute start-0 ms-2">{customer.id}</p>
                        <h3 className="text-center fw-normal">{customer.name}</h3>
                    </div>
                ))
            }
        </div>
    );
}

export default CustomersNameList;