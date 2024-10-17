import { Client } from "./Models/Client";
import { getClientData } from "./Services/ClientService";

const App = async() => {
    let clientList: Client[] = await getClientData();
}

App();