"use client"

import { ApiRoutesEnum } from "@/enums/api-routes.enum";
import { HttpMethodsEnum } from "@/enums/http-methods.enum";
import { ICustomer } from "@/interfaces/customer.interface";
import customerService from "@/services/customer.service";
import { pushCustomerToList } from "@/store/slices/customer.slice";
import { changeSpinner } from "@/store/slices/spinner.slice";
import { formatarTelefone } from "@/utils/format-phone.util";
import { FormEvent, useRef, useState } from "react";
import { useDispatch } from "react-redux";

const NewCustomerForm = () => {

    const dispatch = useDispatch()

    const [customer, setCustomer] = useState<ICustomer>({ id: "",name: "", email: "", phone: "", location: { x: 0, y: 0 } });

    const closeModalRef = useRef<HTMLButtonElement>(null)

    async function createCustomer(e: FormEvent) {
        e.preventDefault()
        dispatch(changeSpinner(true))
        const result = await customerService.createCustomer(customer)
        dispatch(changeSpinner(false))
        if (result && closeModalRef.current) {
            customer.id = result.id
            dispatch(pushCustomerToList(customer))
            closeModalRef.current.click()
        }
    }

    return (
        <form className="form-group" onSubmit={createCustomer}>
            <div className="modal-body">
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
            </div>
            <div className="modal-footer border-0">
                <button ref={closeModalRef} id="button-close-modal" type="button" className="btn btn-secondary"
                    data-bs-dismiss="modal">Fechar</button>
                <button type="submit" className="btn btn-primary bg-main">Salvar</button>
            </div>
        </form>
    );
}

export default NewCustomerForm;