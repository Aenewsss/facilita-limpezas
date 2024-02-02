export async function FormatResponse(res: Response){
    return (await res.json() as { result: any }).result
}