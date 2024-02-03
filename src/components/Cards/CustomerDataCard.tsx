"use client"
import { ICustomer } from "@/interfaces/customer.interface";
import { IStore } from "@/interfaces/store.interface";
import customerService from "@/services/customer.service";
import { changeEditCustomer, removeCustomerFromList } from "@/store/slices/customer.slice";
import { formatarTelefone } from "@/utils/format-phone.util";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CustomerDataCard = () => {

    const dispatch = useDispatch()

    const { customerSelected } = useSelector((store: IStore) => store.customer)

    const [customer, setCustomer] = useState<ICustomer>({ id: "", name: "", email: "", phone: "", location: { x: 0, y: 0 } });

    async function deleteCustomer() {
        const result = await customerService.deleteCustomer(customer.id!)

        if(result) dispatch(removeCustomerFromList(customer.id))
    }

    const editCustomer = () => dispatch(changeEditCustomer(true))

    useEffect(() => {
        setCustomer(customerSelected!)
    }, [customerSelected]);

    return (
        <div className="p-2 rounded">
            <h2 className="fw-normal fs-3 my-3">Ficha do cliente</h2>
            <div>
                <div className="mb-3">
                    <label className="text-secondary">Nome</label>
                    <p>{customer.name}</p>
                </div>
                <div className="mb-3">
                    <label className="text-secondary" >E-mail</label>
                    <p>{customer.email}</p>
                </div>
                <div className="mb-3">
                    <label className="text-secondary" >Telefone</label>
                    <p>{customer.phone}</p>
                </div>

                <div className="d-flex flex-column gap-2 mt-3 ">
                    <label className="text-secondary fw-normal">Localização X, Y do cliente</label>
                    <div className="d-flex justify-content-space-between gap-3">
                        <div className="mb-3">
                            <label>X = {customer.location.x}</label>
                        </div>
                        <div className="mb-3">
                            <label >Y = {customer.location.y}</label>
                        </div>
                    </div>
                </div>
                <div className="d-flex gap-3">
                    <button onClick={deleteCustomer} className="btn btn-danger">Remover cliente</button>
                    <button onClick={editCustomer} className="btn btn-primary bg-main">Alterar dados do cliente</button>
                </div>
            </div>
        </div>

    );
}

export default CustomerDataCard;