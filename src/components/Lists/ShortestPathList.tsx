"use client"
import { IShortestPath } from "@/interfaces/shortest-path.interface";
import calculationService from "@/services/calculation.service"
import { changeShortestPath } from "@/store/slices/path.slice";
import { changeSpinner } from "@/store/slices/spinner.slice";
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";

const ShortestPathList = () => {

    const dispatch = useDispatch()
    
    const [shortestPath, setShortestPath] = useState<IShortestPath>();

    useEffect(() => {
        async function getShortestPath() {
            dispatch(changeSpinner(true))
            const result = await calculationService.getShortestPath()
            dispatch(changeShortestPath(result))
            setShortestPath(result)
            dispatch(changeSpinner(false))
        }
        getShortestPath()
    }, [])

    if (!shortestPath) return <p className="text-danger">Nenhuma rota pode ser calculada. Verifique sua lista de clientes.</p>
    else return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Coordenada</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Distância do último ponto</th>
                    </tr>
                </thead>
                <tbody>
                    {shortestPath.path.map((el, index, arr) => (
                        index == 0
                            ? <tr key={index}>
                                <td>X = {el.location.x}, Y = {el.location.y}</td>
                                <td>Ponto inicial</td>
                                <td></td>
                            </tr>
                            : index == arr.length - 1
                                ? <tr key={index}>
                                    <td>X = {el.location.x}, Y = {el.location.y}</td>
                                    <td>Ponto final</td>
                                    <td>{el.distanceFromLastPoint}</td>
                                </tr>
                                : <tr key={index}>
                                    <td>X = {el.location.x}, Y = {el.location.y}</td>
                                    <td>{el.userName}</td>
                                    <td>{el.distanceFromLastPoint}</td>
                                </tr>
                    )
                    )}
                </tbody>
            </table>

            <p>Total percorrido: {shortestPath.totalTraveled}</p>
        </>

    )
}

export default ShortestPathList;