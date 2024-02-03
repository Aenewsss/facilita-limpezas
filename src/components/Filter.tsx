"use client"

import { filterCustomer } from "@/store/slices/customer.slice";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

const Filter = () => {

    const dispatch = useDispatch()

    const [customerName, setCustomerName] = useState<string>('');

    const filter = (e: FormEvent) => {
        const { value } = e.target as HTMLInputElement
        dispatch(filterCustomer(value))
        setCustomerName(value)
    }

    return (
        <div className="form-floating">
            <input onChange={filter} value={customerName || ""} type="text" required className="form-control " id="floatingInputSearchName" placeholder="José" />
            <label htmlFor="floatingInputSearchName">Procurar cliente</label>
        </div>
    );
}

export default Filter;