import CartesianePlane from "@/components/CartesianePlane"
import ShortestPathList from "@/components/Lists/ShortestPathList"
import { PagesPathnameEnum } from "@/enums/pages.enum"
import calculationService from "@/services/calculation.service"
import Link from "next/link"

export default function BestRoutes() {


    return (
        <section className="my-5 container position-relative vh-100">
            <h1 className="fw-normal text-center">Facilita | Melhores Rotas</h1>
            <p className="fw-light fs-5 text-center">Esta é a rota mais curta que a a empresa deve percorrer para economizar:</p>
            <CartesianePlane />
            <ShortestPathList />

            <Link href={PagesPathnameEnum.CUSTOMERS} className="btn btn-success scale mt-4 text-white">Ver lista de clientes</Link>

        </section>
    )
}