import Image from "next/image";
import Link from "next/link";

const RouteCalculationCard = () => {
    return (
        <Link href="https://aenamartinelli.com.br" className="w-40 scale box-shadow overflow-hidden rounded ">
            <Image className="img-fluid mh-400  object-fit-cover" fill quality={100} src="/locations.jpg" alt="Mapa" />
            <div className="p-3">
                <h2 className="fw-normal">Facilita | Melhores Rotas </h2>
                <p>Leve a excelência no atendimento a um novo nível com a funcionalidade de otimização de rotas da Facilita Limpezas! Teste agora nossa nova solução.</p>
            </div>
        </Link >
    );
}

export default RouteCalculationCard;