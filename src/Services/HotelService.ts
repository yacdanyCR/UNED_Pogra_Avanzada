import { fetchHotelList } from "../Api/fetchApiHotel"
import { Hotel } from "../Models/Hotel";

const getHotelList = async()=> {
    const data = await fetchHotelList();
    const hotelList: Hotel[] = [];
    data?.forEach(hotel => {
        const newHotel = new Hotel(hotel.id, hotel.name, hotel.address, hotel.zip);
        hotelList.push(newHotel);
    });

    return hotelList;
}

export {getHotelList}