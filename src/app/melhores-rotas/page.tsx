import ShortestPathList from "@/components/Lists/ShortestPathList"
import calculationService from "@/services/calculation.service"

export default function BestRoutes() {


    return (
        <section className="my-5 container position-relative vh-100">
            <h1 className="fw-normal text-center">Facilita | Melhores Rotas</h1>
            <p className="fw-light fs-5 text-center">Esta é a rota mais curta que a a empresa deve percorrer para economizar:</p>
            <ShortestPathList />
        </section>
    )
}