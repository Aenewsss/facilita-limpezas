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

    if (!customerSelected) return <div className="d-flex flex-column align-items-center justify-content-center h-100">
        <p className="mb-0 text-danger text-center">Nenhum cliente foi selecionado.</p>
        <p className=" text-center">* se você deseja visualizar os dados de algum cliente, clique sobre seu nome na listagem.</p>
    </div>
    else return !editVisible ? <CustomerDataCard /> : <CustomerDataForm />

}

export default CustomersCompleteList;