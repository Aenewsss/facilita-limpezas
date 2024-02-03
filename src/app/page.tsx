import CustomersCard from "@/components/Cards/CustomersCard";
import RouteCalculationCard from "@/components/Cards/RouteCalculationCard";

export default function Home() {
    return (
        <main className="my-5">
            <h1 className="text-center fw-normal">Facilita Limpezas | Admin</h1>
            <div className="container mt-4 d-flex gap-4 flex-wrap justify-content-between align-items-center">
                <CustomersCard />
                <RouteCalculationCard />
            </div>
        </main >
    )
}