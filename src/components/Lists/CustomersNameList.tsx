"use client"
import { ICustomer } from "@/interfaces/customer.interface";
import { IStore } from "@/interfaces/store.interface";
import customerService from "@/services/customer.service";
import { changeCustomerList, changeCustomerSelected, changeFilterCustomer } from "@/store/slices/customer.slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSpinner } from "@/store/slices/spinner.slice";

const CustomersNameList = () => {

    const dispatch = useDispatch()

    const [customers, setCustomers] = useState<ICustomer[]>();

    const { filterCustomer, customersList } = useSelector((store: IStore) => store.customer)

    useEffect(() => {
        getCustomers()
        async function getCustomers() {
            dispatch(changeSpinner(true))
            const result = await customerService.getAllCustomers()
            const filteredList = filterCustomer ? result.filter(el => el.name.toLowerCase().includes(filterCustomer.toLowerCase()) || el.email.toLowerCase().includes(filterCustomer.toLowerCase()) || el.phone.toLowerCase().includes(filterCustomer.toLowerCase())) : result
            setCustomers(filteredList)
            dispatch(changeCustomerList(filteredList))
            dispatch(changeSpinner(false))
        }
    }, [filterCustomer, dispatch]);

    function chooseCustomer(customerId: string) {
        dispatch(changeCustomerSelected(customerId))
        dispatch(changeFilterCustomer(''))
    }

    useEffect(() => {
        setCustomers(customersList)
    }, [customersList]);

    return (
        <div className="d-flex flex-column gap-1">
            {
                customers?.map(customer => (
                    <div key={customer.id} onClick={() => chooseCustomer(customer.id!)} className="p-2 position-relative px-4 scale" role="button">
                        <h3 className="text-center fw-normal fs-5">{customer.name}</h3>
                    </div>
                ))
            }
        </div>
    );
}

export default CustomersNameList;