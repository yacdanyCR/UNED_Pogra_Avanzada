import { getInfoClient } from "../Api/fetchApiClient";
import { Client } from "../Models/Client";

const getClientData = async () :Promise<Client[]> => {
    let clientList: Client[]=[]
    await getInfoClient().then((data) => {
        data?.forEach(apiClient => {
            const client = new Client(apiClient.id, apiClient.name, apiClient.email, apiClient.phone);
            clientList.push(client);
        });
    })

    return clientList
}

export {getClientData}