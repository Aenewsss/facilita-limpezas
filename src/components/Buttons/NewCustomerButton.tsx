import Image from "next/image";

const NewCustomerButton = () => {
    return (
        <div className="position-absolute scale box-shadow rounded-circle bg-main px-3 py-1" role="button" data-bs-toggle="modal" data-bs-target="#newCustomerModal">
            <h2 className="text-white">+</h2>
        </div >
    );
}

export default NewCustomerButton;