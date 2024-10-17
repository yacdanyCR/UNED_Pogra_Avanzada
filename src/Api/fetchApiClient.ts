import { ClientImp } from "../Interfaces/ClientImp";

const fetchInfoClients = async ():Promise<ClientImp[] | undefined> => {
    try {
        return await fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => {
                return response.json();
            }).then((value) => {
                const data: ClientImp[] = value;
                return data;
            })
    } catch (error) {
        console.log(error)
    }
}

export  {fetchInfoClients}