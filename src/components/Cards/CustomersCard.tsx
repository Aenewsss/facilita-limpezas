import { PagesPathnameEnum } from "@/enums/pages.enum";
import Image from "next/image";
import Link from "next/link";

const CustomersCard = () => {
    return (
        <Link href={PagesPathnameEnum.CUSTOMERS} className="w-40 scale box-shadow overflow-hidden rounded ">
            <Image className="img-fluid mh-400 object-fit-cover" fill quality={100} src="/cleaning-tools.jpg" alt="Equipamentos de limpeza" />
            <div className="p-3">
                <h2 className="fw-normal">Facilita | Clientes</h2>
                <p>Com nosso novo sistema online, você pode cadastrar, visualizar, atualizar e remover informações de clientes de maneira intuitiva e descomplicada, eliminando as planilhas tradicionais.</p>
            </div>
        </Link >
    );
}

export default CustomersCard;