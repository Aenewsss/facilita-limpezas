import Image from "next/image";

const NewCustomerButton = () => {
    return (
        <div className="btn-create scale box-shadow rounded-pill bg-main px-3 py-2 d-flex align-items-center" role="button" data-bs-toggle="modal" data-bs-target="#newCustomerModal">
            <p className="text-white mb-0">+ Adicionar Cliente</p>
        </div >
    );
}

export default NewCustomerButton;