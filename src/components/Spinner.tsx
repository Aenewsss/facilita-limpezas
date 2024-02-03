"use client"

import { IStore } from "@/interfaces/store.interface";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Spinner = () => {

    const { visible } = useSelector((store: IStore) => store.spinner)

    const [showSpinner, setShowSpinner] = useState(false);

    useEffect(() => {
        setShowSpinner(visible)
        console.log(visible)
    }, [visible]);

    const spinner = useCallback(() => {
            if (!showSpinner) return null
            return (
                <div className="position-fixed vh-100 w-100 z-1 d-flex justify-content-center align-items-center">
                    <div className="position-absolute z-2 d-flex align-items-center flex-column">
                        <h2 className=" text-white">Carregando</h2>
                        <div className="loading-spinner"></div>
                    </div>
                    <div className="bg-black opacity-50 vh-100 w-100 position-fixed"></div>
                </div>
            );
    }, [showSpinner])

    return spinner()
}

export default Spinner;