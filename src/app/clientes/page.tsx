import NewCustomerButton from "@/components/Buttons/NewCustomerButton";
import NewCustomerModal from "@/components/Modals/NewCustomerModal";

export default function Customers() {
    return (
        <section className="mt-5 container">
            <NewCustomerButton />
            <NewCustomerModal />
        </section>
    )
}