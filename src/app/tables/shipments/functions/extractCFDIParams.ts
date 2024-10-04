
export function extractCFDIParams(str: string) {
    const tempElement = document.createElement("div")
    tempElement.innerHTML = str
    const btnTraslado = tempElement.querySelector('#btnverTraslado')
    if (btnTraslado === null) return [",",","]
    const onclickContent = btnTraslado.getAttribute('onclick') as string
    const regex = /'([^']+)'/g;
    const matches = Array.from(onclickContent.matchAll(regex)).map(match => match[1]);

    const param1 = matches[0]
    const param2 = matches[1]
 
    return [param1,param2]
}