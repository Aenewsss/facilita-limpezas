import Link from "next/link";
import CartesianePlane from "../CartesianePlane";
import ShortestPathList from "../Lists/ShortestPathList";
import { PagesPathnameEnum } from "@/enums/pages.enum";

const ShortestPathModal = () => {
    return (
        <div className="modal fade text-black" id="shortestPathModal" data-bs-backdrop="static" data-bs-keyboard="false"
            tabIndex={-1} aria-labelledby="shortestPathModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content " >
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 text-capitalize">Melhor rota de atendimento</h1>
                        <button type="button" className="btn btn-default text-black fs-5" data-bs-dismiss="modal"
                            aria-label="Close">X</button>
                    </div>
                    <div className="modal-body">
                        <CartesianePlane />
                        <ShortestPathList />
                    </div>
                    <div className="modal-footer border-0">
                        <button id="button-close-modal" type="button" className="btn btn-secondary"
                            data-bs-dismiss="modal">Fechar</button>
                        <Link href={PagesPathnameEnum.CALCULATION} className="btn btn-primary bg-main text-white">Ver página completa</Link>

                    </div>
                </div>
            </div>
        </div >
    );
}

export default ShortestPathModal;