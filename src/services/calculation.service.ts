import { ApiRoutesEnum } from "@/enums/api-routes.enum"
import { HttpMethodsEnum } from "@/enums/http-methods.enum"
import { IShortestPath } from "@/interfaces/shortest-path.interface"
import { FormatResponse } from "@/utils/format-response.utils"

class CalculationService {
    async getShortestPath(): Promise<IShortestPath> {
        const response = await fetch(ApiRoutesEnum.CALCULATION, {
            headers: { "Content-Type": "application/json" },
            method: HttpMethodsEnum.GET,
        })
        return await FormatResponse(response)
    }
}

export default new CalculationService()