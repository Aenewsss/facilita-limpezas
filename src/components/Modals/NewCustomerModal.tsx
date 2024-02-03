import NewCustomerForm from "../Forms/NewCustomerForm";

const NewCustomerModal = () => {

    return (
        <div className="modal fade text-black" id="newCustomerModal" data-bs-backdrop="static" data-bs-keyboard="false"
            tabIndex={-1} aria-labelledby="newCustomerModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content " >
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 text-capitalize">Adicionar Cliente</h1>
                        <button type="button" className="btn btn-default text-black fs-5" data-bs-dismiss="modal"
                            aria-label="Close">X</button>
                    </div>
                    <NewCustomerForm />

                </div>
            </div>
        </div >
    );
}

export default NewCustomerModal;