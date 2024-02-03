import NewCustomerButton from "@/components/Buttons/NewCustomerButton";
import CustomersList from "@/components/Lists/CustomersNameList";
import Filter from "@/components/Filter";
import NewCustomerModal from "@/components/Modals/NewCustomerModal";
import CustomersCompleteList from "@/components/Lists/CustomerCompleteList";
import Link from "next/link";
import { PagesPathnameEnum } from "@/enums/pages.enum";

export default function Customers() {
    return (
        <section className="my-5 container position-relative ">
            <h1 className="fw-normal text-center">Facilita | Gestão de Clientes</h1>
            <div className="row mt-4">
                <div className="col-md-3 d-flex align-items-center">
                    <NewCustomerButton />
                </div>
                <div className="col-md-9">
                    <Filter />
                </div>
            </div>
            <div className="row mt-4 bg-whiteo6 box-shadow">
                <div className="col-md-3 border border-end border-3 border-0">
                    <CustomersList />
                </div>
                <div className="col-md-9">
                    <CustomersCompleteList />
                </div>
            </div>
            <Link href={PagesPathnameEnum.CALCULATION} className="btn btn-success scale mt-4 text-white">Verificar melhor rota de atendimento</Link>
            <NewCustomerModal />
        </section>
    )
}