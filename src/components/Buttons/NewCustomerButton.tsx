import Image from "next/image";

const NewCustomerButton = () => {
    return (
        <div className="btn-create scale box-shadow rounded-pill bg-main py-2 d-flex align-items-center justify-content-center mb-2" role="button" data-bs-toggle="modal" data-bs-target="#newCustomerModal">
            <p className="text-white mb-0 text-center">+ Adicionar Cliente</p>
        </div >
    );
}

export default NewCustomerButton;