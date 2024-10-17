import { Client } from "./Models/Client";
import { Hotel } from "./Models/Hotel";
import { getClientData } from "./Services/ClientService";
import { getHotelList } from "./Services/HotelService";


const App = async() => {
    let clientList: Client[] = await getClientData();
    let hotelList: Hotel[] = await getHotelList();

    console.log(hotelList)
    console.log(clientList)
}

App();