"use client"
import { ICustomer } from "@/interfaces/customer.interface";
import { IStore } from "@/interfaces/store.interface";
import customerService from "@/services/customer.service";
import { changeCustomerList, changeCustomerSelected } from "@/store/slices/customer.slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CustomersNameList = () => {

    const dispatch = useDispatch()

    const [customers, setCustomers] = useState<ICustomer[]>();

    const { customersList, filterCustomer } = useSelector((store: IStore) => store.customer)

    useEffect(() => {
        async function getCustomers() {
            const result = await customerService.getAllCustomers()
            const filteredList = filterCustomer ? result.filter(el => el.name.includes(filterCustomer) || el.email.includes(filterCustomer)) : result
            setCustomers(filteredList)
            dispatch(changeCustomerList(filteredList))
        }
        getCustomers()
    }, [customersList, filterCustomer]);

    function chooseCustomer(customerId: string) {
        dispatch(changeCustomerSelected(customerId))
    }

    return (
        <div className="d-flex flex-column gap-1">
            {
                customers?.map(customer => (
                    <div key={customer.id} onClick={() => chooseCustomer(customer.id!)} className="p-2 position-relative px-4 scale" role="button">
                        <p className="position-absolute start-0 ms-2">{customer.id}</p>
                        <h3 className="text-center fw-normal fs-5">{customer.name}</h3>
                    </div>
                ))
            }
        </div>
    );
}

export default CustomersNameList;