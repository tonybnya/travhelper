import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  console.log(type);
    try {
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': 'b10a81c731msh2b8a6f0527a41fcp10a913jsnddd7a51d07f9',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });
        return data;
    }
    catch (error) {
        console.log(error);
    }
}