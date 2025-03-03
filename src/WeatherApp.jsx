import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        city: "",
        feelsLike: 29.83,
        temp: 31,
        maxTemp: 31,
        minTemp: 31,
        humidity: 30,
        weather: "cloudy"
    });

    let getCityWeather = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <>
            <SearchBox newInfo={getCityWeather} />
            { weatherInfo.city && <InfoBox info={weatherInfo} />}
            
        </>
    )
}