"use client"

import { IStore } from "@/interfaces/store.interface";
import { changeFilterCustomer } from "@/store/slices/customer.slice";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {

    const dispatch = useDispatch()
    const { customerSelected } = useSelector((store: IStore) => store.customer)

    const [customerName, setCustomerName] = useState<string>('');

    const filter = (e: FormEvent) => {
        const { value } = e.target as HTMLInputElement
        dispatch(changeFilterCustomer(value))
        setCustomerName(value)
    }

    useEffect(() => {
        if(customerSelected) setCustomerName('')
    }, [customerSelected]);
    
    return (
        <div className="form-floating">
            <input onChange={filter} value={customerName || ""} type="text" required className="form-control " id="floatingInputSearchName" placeholder="José" />
            <label htmlFor="floatingInputSearchName">Procurar cliente</label>
        </div>
    );
}

export default Filter;