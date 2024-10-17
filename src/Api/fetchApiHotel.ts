import { HotelImp } from "../Interfaces/HotelImp";

const fetchHotelList =async ():Promise<HotelImp[] | undefined> => {
    try {
        const data = await fetch("https://fake-json-api.mock.beeceptor.com/companies");
        const json:HotelImp[] = await data.json();
        return json;
    } catch (error) {
        console.log(error)
    }
}

export {fetchHotelList}