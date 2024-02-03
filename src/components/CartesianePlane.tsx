"use client"

import { IShortestPath } from "@/interfaces/shortest-path.interface";
import { IStore } from "@/interfaces/store.interface";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const CartesianePlane = () => {

    const containerRef = useRef(null)

    const { path } = useSelector((store: IStore) => store)

    const [colors, setColors] = useState<string[]>();
    const [shortestPath, setShortestPath] = useState<IShortestPath>();
    const [containerWidth, setContainerWidth] = useState(0);
    const [halfWidth, setHalfWidth] = useState(0);
    const [halfHeight, setHalfHeight] = useState(0);
    const [initialPoint, setInitialPoint] = useState({
        x: 0,
        y: 0
    });

    const height = 400

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                // Obtém a largura da div
                const divWidth = containerRef.current.offsetWidth;
                setContainerWidth(divWidth)
                setHalfWidth(divWidth / 2)
                setHalfHeight(height / 2)
                setInitialPoint({ x: divWidth / 2, y: height / 2 })
            }
        }

        window.addEventListener("resize", updateDimensions)

        updateDimensions()

        return () => { window.removeEventListener("resize", updateDimensions) }
    }, [containerRef]);

    useEffect(() => {
        setShortestPath(path)
        fillColor()
    }, [path]);

    function checkPointLocation(point: number, direction: "X" | "Y") {
        if (point == 0 && direction == "X") return initialPoint.x
        if (point == 0 && direction == "Y") return initialPoint.y

        if (point > 0 && direction == "X") return initialPoint.x + point
        if (point > 0 && direction == "Y") return initialPoint.y - point

        if (point < 0 && direction == "X") return initialPoint.x - point
        if (point < 0 && direction == "Y") return initialPoint.y + point
    }

    function fillColor() {

        const colors = shortestPath?.path.map(el => {
            const randomRed = Number((Math.random() * 255).toFixed(0))
            const randomGreen = Number((Math.random() * 255).toFixed(0))
            const randomBlue = Number((Math.random() * 255).toFixed(0))
            return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
        })

        setColors(colors)
    }

    return (
        <div ref={containerRef} >
            <svg width="100%" height={height}>
                <rect width={containerWidth} height="100%" stroke="black" fill="none" />

                {/* retas do plano cartesiano  */}
                <g>
                    <line x1={halfWidth} y1={0.9 * height} x2={halfWidth} y2={0.1 * height} stroke="black" strokeWidth={2} />
                    <line x1={0.3 * containerWidth} y1={halfHeight} x2={0.7 * containerWidth} y2={halfHeight} stroke="black" strokeWidth={2} />
                </g>

                {/* Pontos (X, Y) do plano  */}
                {colors!?.length > 0 && shortestPath?.path.map((el, index, arr) =>
                    <g key={index}>

                        {/* Aqui serão os pontos X,Y representados no plano cartesiano */}
                        <circle fill={el.location.x == 0 && el.location.y == 0 ? "black" : colors![index]} r={6} cx={checkPointLocation(el.location.x, "X")} cy={checkPointLocation(el.location.y, "Y")} />

                        {/* Esse código é para criar a linha na direção do próximo ponto de atendimento  */}
                        {arr[index + 1]?.location.x && arr[index + 1]?.location.y &&
                            <line
                                x1={checkPointLocation(arr[index + 1].location.x, "X")}
                                y1={checkPointLocation(arr[index + 1].location.y, "Y")}
                                x2={checkPointLocation(el.location.x, "X")}
                                y2={checkPointLocation(el.location.y, "Y")}
                                stroke={el.location.x == 0 && el.location.y == 0 ? "black" : colors![index]}
                                strokeWidth={2}
                            />
                        }

                        {/* Nessa parte vamos ligar o último ponto até o ponto de partida novamente */}
                        {
                            index + 1 == arr.length - 1 &&
                            <line
                                x1={checkPointLocation(arr[0].location.x, "X")}
                                y1={checkPointLocation(arr[0].location.y, "Y")}
                                x2={checkPointLocation(el.location.x, "X")}
                                y2={checkPointLocation(el.location.y, "Y")}
                                stroke={el.location.x == 0 && el.location.y == 0 ? "black" : colors![index]}
                                strokeWidth={2}
                            />
                        }

                        {/* Legenda  */}
                        <text fontSize={20} fill={el.location.x == 0 && el.location.y == 0 ? "black" : colors![index]} strokeWidth={5} x={20} y={40 + (index * 30)}>● ({el.location.x}, {el.location.y})</text>
                    </g>
                )}

            </svg>
        </div>
    );
}

export default CartesianePlane;