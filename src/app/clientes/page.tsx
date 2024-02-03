import NewCustomerButton from "@/components/Buttons/NewCustomerButton";
import CustomersNameList from "@/components/Lists/CustomersNameList";
import Filter from "@/components/Filter";
import NewCustomerModal from "@/components/Modals/NewCustomerModal";
import CustomersCompleteList from "@/components/Lists/CustomerCompleteList";
import Link from "next/link";
import { PagesPathnameEnum } from "@/enums/pages.enum";
import ShortestPathModal from "@/components/Modals/ShortestPathModal";

export default function Customers() {
    return (
        <section className="my-5 container position-relative ">
            <h1 className="fw-normal text-center">Facilita | Gestão de Clientes</h1>
            <div className="row mt-4">
                <div className="col-md-3 d-flex align-items-center">
                    <NewCustomerButton />
                </div>
                <div className="col-md-9 mt-md-0 mt-3">
                    <Filter />
                </div>
            </div>
            <div className="row mt-4 bg-whiteo6 box-shadow">
                <div className="col-md-3 border border-end border-3 border-0 customer-name-list">
                    <CustomersNameList />
                </div>
                <div className="col-md-9 mt-md-0 mt-2">
                    <CustomersCompleteList />
                </div>
            </div>
            <button role="button" data-bs-toggle="modal" data-bs-target="#shortestPathModal"  className="btn btn-success scale mt-4 text-white">Verificar melhor rota de atendimento</button>
            <NewCustomerModal />
            <ShortestPathModal />
        </section>
    )
}