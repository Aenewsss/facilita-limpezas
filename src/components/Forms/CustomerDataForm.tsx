"use client"
import { ICustomer } from "@/interfaces/customer.interface";
import { IStore } from "@/interfaces/store.interface";
import calculationService from "@/services/calculation.service";
import customerService from "@/services/customer.service";
import { changeEditCustomer, updateCustomerInList } from "@/store/slices/customer.slice";
import { changeShortestPath } from "@/store/slices/path.slice";
import { changeSpinner } from "@/store/slices/spinner.slice";
import { formatarTelefone } from "@/utils/format-phone.util";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CustomerDataForm = () => {

    const dispatch = useDispatch()

    const { customerSelected } = useSelector((store: IStore) => store.customer)

    const [customer, setCustomer] = useState<ICustomer>({ id: "", name: "", email: "", phone: "", location: { x: 0, y: 0 } });

    async function updateCustomer(e: FormEvent) {
        e.preventDefault()

        dispatch(changeSpinner(true))
        const result = await customerService.updateCustomer(customer.id!, customer)
        dispatch(changeSpinner(false))

        if (result) {
            dispatch(updateCustomerInList(customer))
            dispatch(changeEditCustomer(false))
            dispatch(changeShortestPath(await calculationService.getShortestPath()))
        }
    }

    const cancelEdit = () => dispatch(changeEditCustomer(false))

    useEffect(() => {
        setCustomer(customerSelected!)
    }, [customerSelected]);

    return (
        <div className="p-2 rounded">
            <h2 className="fw-normal fs-3 my-3">Ficha do cliente</h2>
            <form className="form-group" onSubmit={updateCustomer}>
                <div className="form-floating mb-3">
                    <input onChange={(e) => setCustomer({ ...customer, name: e.target.value })} value={customer?.name || ""} type="text" required className="form-control" id="floatingInputName" placeholder="José" />
                    <label htmlFor="floatingInputName">Nome</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={(e) => setCustomer({ ...customer, email: e.target.value })} value={customer?.email || ""} type="email" required className="form-control" id="floatingInputEmail" placeholder="jose@facilita.com" />
                    <label htmlFor="floatingInputEmail">E-mail</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={(e) => setCustomer({ ...customer, phone: formatarTelefone(e.target.value) })} value={customer?.phone || ""} type="text" required className="form-control" id="floatingInputPhone" placeholder="(51) 99453 0023" />
                    <label htmlFor="floatingInputPhone">Telefone</label>
                </div>

                <div className="d-flex flex-column gap-2 mt-3 ">
                    <label className="fs-5 fw-medium">Insira a localização X, Y do seu cliente</label>
                    <span>* somente números são aceitos </span>
                    <div className="d-flex justify-content-space-between gap-3">
                        <div className="form-floating mb-3">
                            <input onChange={(e) => setCustomer({ ...customer, location: { x: Number(e.target.value), y: customer.location.y } })} required value={customer?.location.x || ""} type="number" className="form-control" id="floatingInputCoordX" placeholder="(51) 99453 0023" />
                            <label htmlFor="floatingInputCoordX">X</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={(e) => setCustomer({ ...customer, location: { y: Number(e.target.value), x: customer.location.x } })} required value={customer?.location.y || ""} type="number" className="form-control" id="floatingInputCoordY" placeholder="(51) 99453 0023" />
                            <label htmlFor="floatingInputCoordY">Y</label>
                        </div>
                    </div>
                </div>
                <div className="d-flex gap-2">
                    <button onClick={cancelEdit} className="btn btn-danger">Cancelar</button>
                    <button type="submit" className="btn btn-primary bg-main">Salvar alterações</button>
                </div>
            </form>
        </div >

    );
}

export default CustomerDataForm;