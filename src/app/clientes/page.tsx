import NewCustomerButton from "@/components/Buttons/NewCustomerButton";
import CustomersList from "@/components/CustomersList";
import Filter from "@/components/Filter";
import NewCustomerModal from "@/components/Modals/NewCustomerModal";

export default function Customers() {
    return (
        <section className="my-5 container position-relative vh-100">
            <h1 className="fw-normal text-center">Facilita | Clientes</h1>
            <div className="row flex-md-row flex-column-reverse">
                <div className="col-md-3">
                    <div className="d-flex flex-column gap-3 mt-2">
                        <NewCustomerButton />
                        <CustomersList />
                    </div>
                </div>
                <div className="col-md-9 mt-md-0 mt-5">
                    <Filter />

                </div>
            </div>
            <NewCustomerModal />
        </section>
    )
}