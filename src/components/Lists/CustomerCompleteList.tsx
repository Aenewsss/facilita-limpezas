"use client"
import { IStore } from "@/interfaces/store.interface";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CustomerDataCard from "../Cards/CustomerDataCard";
import CustomerDataForm from "../Forms/CustomerDataForm";

const CustomersCompleteList = () => {

    const { customerSelected, editCustomer } = useSelector((store: IStore) => store.customer)

    const [editVisible, setEditVisible] = useState<boolean>(false);

    useEffect(() => {
        setEditVisible(editCustomer!)
    }, [editCustomer]);

    if (!customerSelected) return <p className="text-danger h-100 d-flex align-items-center justify-content-center">Nenhum cliente foi selecionado.</p>
    else return !editVisible ? <CustomerDataCard /> : <CustomerDataForm />

}

export default CustomersCompleteList;