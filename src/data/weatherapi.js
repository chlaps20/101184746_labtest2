import axios from 'axios';


export const getWeatherData = async () => {
    try{
        const {data} = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=dc503014e2e94f90678ab6d46e2b7766");
        return data;
    }catch(error) {
        throw error;
    }
}