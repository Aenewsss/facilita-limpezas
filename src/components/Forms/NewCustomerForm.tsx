"use client"

import { ApiRoutesEnum } from "@/enums/api-routes.enum";
import { HttpMethodsEnum } from "@/enums/http-methods.enum";
import { ICustomer } from "@/interfaces/customer.interface";
import { FormEvent, useState } from "react";

const NewCustomerForm = () => {

    const [customer, setCustomer] = useState<ICustomer>({ name: "", email: "", phone: "", location: { x: 0, y: 0 } });

    async function createCustomer(e: FormEvent) {
        e.preventDefault()

        const result = await fetch(ApiRoutesEnum.CUSTOMERS, {
            headers: { "Content-Type": "application/json" },
            method: HttpMethodsEnum.POST,
            body: JSON.stringify({ customer })
        })
    }

    return (
        <form className="form-group" onSubmit={createCustomer}>
            <div className="modal-body">
                <div className="form-floating mb-3">
                    <input onChange={(e) => setCustomer({ ...customer, name: e.target.value })} value={customer?.name || ""} type="text" className="form-control" id="floatingInputName" placeholder="José" />
                    <label htmlFor="floatingInputName">Nome</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={(e) => setCustomer({ ...customer, email: e.target.value })} value={customer?.email || ""} type="email" className="form-control" id="floatingInputEmail" placeholder="jose@facilita.com" />
                    <label htmlFor="floatingInputEmail">E-mail</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={(e) => setCustomer({ ...customer, phone: e.target.value })} value={customer?.phone || ""} type="text" className="form-control" id="floatingInputPhone" placeholder="(51) 99453 0023" />
                    <label htmlFor="floatingInputPhone">Telefone</label>
                </div>

                <div className="d-flex flex-column gap-2 mt-3 ">
                    <label className="fs-5 fw-medium">Insira a localização X, Y do seu cliente</label>
                    <span>* somente números são aceitos </span>
                    <div className="d-flex justify-content-space-between gap-3">
                        <div className="form-floating mb-3">
                            <input onChange={(e) => setCustomer({ ...customer, location: { x: Number(e.target.value), y: customer.location.y } })} value={customer?.location.x || ""} type="number" className="form-control" id="floatingInputCoordX" placeholder="(51) 99453 0023" />
                            <label htmlFor="floatingInputCoordX">X</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={(e) => setCustomer({ ...customer, location: { y: Number(e.target.value), x: customer.location.x } })} value={customer?.location.y || ""} type="number" className="form-control" id="floatingInputCoordY" placeholder="(51) 99453 0023" />
                            <label htmlFor="floatingInputCoordY">Y</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer border-0">
                <button id="button-close-modal" type="button" className="btn btn-secondary"
                    data-bs-dismiss="modal">Fechar</button>
                <button type="submit" className="btn btn-primary bg-main">Salvar</button>
            </div>
        </form>
    );
}

export default NewCustomerForm;