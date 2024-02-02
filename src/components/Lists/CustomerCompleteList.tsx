"use client"
import { IStore } from "@/interfaces/store.interface";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CustomerDataForm from "../Forms/CustomerDataForm";

const CustomersCompleteList = () => {

    const { customerSelected } = useSelector((store: IStore) => store.customer)

    if (!customerSelected) return <p className="text-danger h-100 d-flex align-items-center justify-content-center">Nenhum cliente foi selecionado.</p>
    else return (
        <CustomerDataForm />
    );

}

export default CustomersCompleteList;