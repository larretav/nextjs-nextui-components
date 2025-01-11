/**
 * ACTIVIDAD SUSPENDIDA - CATALOGO DE CLIENTES
 */
import CustomerCatalogDesktop from './_components/CustomerCatalogDesktop';

export default async function CustomersTablePage() {
    const headers = new Headers({
        "Content-Type": "application/json",
        "Authorization": process.env.TOKEN || ""
    })

    let activeUsersJson = [];
    let inactiveUsersJson = [];
    try {
        const activeUsersResponse = await fetch("https://onsite.pktuno.mx/ws2//Api/Clientes/Obtener/a15df564-22f4-11eb-860f-00505632f3b46212", {
            headers
        })
        activeUsersJson = await activeUsersResponse.json()
    } catch (error) {
        return <div>Error al obtener el catálogo de clientes</div>
    }

    try {
        const inactiveUsersResponse = await fetch("https://onsite.pktuno.mx/ws2//Api/Clientes/ObtenerBajas/a15df564-22f4-11eb-860f-00505632f3b46212?_=1728601208272", {
            headers
        })
        inactiveUsersJson = await inactiveUsersResponse.json()
    } catch (error) {
        return <div>Error al obtener los usuarios en baja</div>
    }
    return (
        <div>
            Customers Table
            {/* <CustomerCatalogDesktop
                activeUsers={activeUsersJson}
                inactiveUsers={inactiveUsersJson} /> */}
        </div>
    )
}