"use client"
import { IShortestPath } from "@/interfaces/shortest-path.interface";
import calculationService from "@/services/calculation.service"
import { table } from "console";
import { useEffect, useState } from "react"

const ShortestPathList = () => {

    const [shortestPath, setShortestPath] = useState<IShortestPath>();

    useEffect(() => {
        async function getShortestPath() {
            const result = await calculationService.getShortestPath()
            console.log(result)
            setShortestPath(result)
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
                            ? <tr>
                                <td>X = {el.location.x}, Y = {el.location.y}</td>
                                <td>Ponto inicial</td>
                                <td></td>
                            </tr>
                            : index == arr.length - 1
                                ? <tr>
                                    <td>X = {el.location.x}, Y = {el.location.y}</td>
                                    <td>Ponto final</td>
                                    <td>{el.distanceFromLastPoint}</td>
                                </tr>
                                : <tr>
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