import CustomersCard from "@/components/Cards/CustomersCard";
import RouteCalculationCard from "@/components/Cards/RouteCalculationCard";

export default function Home() {
    return (
        <main className="d-flex gap-4 flex-wrap justify-content-between align-items-center container py-5 mt-4">
            <CustomersCard />
            <RouteCalculationCard />
        </main>
    )
}