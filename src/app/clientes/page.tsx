import NewCustomerButton from "@/components/Buttons/NewCustomerButton";
import CustomersList from "@/components/CustomersList";
import NewCustomerModal from "@/components/Modals/NewCustomerModal";

export default function Customers() {
    return (
        <section className="my-5 container position-relative vh-100">
            <h1 className="fw-normal text-center">Facilita | Clientes</h1>
            <div className="d-flex gap-3 my-4">
                <NewCustomerButton />
            </div>
            <div className="d-flex gap-3">
                <CustomersList />
            </div>
            <NewCustomerModal />
        </section>
    )
}