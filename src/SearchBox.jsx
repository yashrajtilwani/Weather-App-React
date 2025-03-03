import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({newInfo}){
    let [city, setCity] = useState("");

    async function getWeatherData(){
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1031e82180981b48e6b9fba105594774&units=metric`);
        let jsonResponse = await response.json();
        let info = {
            city: jsonResponse.name,
            feelsLike: jsonResponse.main.feels_like,
            temp: jsonResponse.main.temp,
            maxTemp: jsonResponse.main.temp_max,
            minTemp: jsonResponse.main.temp_min,
            humidity: jsonResponse.main.humidity,
            weather: jsonResponse.weather[0].description
        }
        
        return info ;
    }

    function handleCity(event) {
        setCity( event.target.value );
    }

    async function handleSubmit(event) {
        event.preventDefault()
        let info =await getWeatherData();
        await newInfo(info);
        setCity("");
    }

    return (
        <div className='SearchBox'>
            <h2>Weather app</h2>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City" variant="outlined" size='small' value={city} onChange={handleCity} required/>
                <br /> <br />
                <Button variant="contained" type="submit" >search</Button>
            </form>
        </div>
    )
}