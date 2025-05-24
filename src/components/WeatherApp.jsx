import SearchBox from "./SearchBox";  // Correct import - same directory
import InfoBox from "./InfoBox"; 
import { useState } from "react";
export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo] = useState({
        city:"Delhi",
        feelslike:24.84,
        temp:25.98,
        tempMin:25.05,
        weather:"Haze",
        humidity:47,
    });
    let updateInfo =(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div className="weather-app-container">
        <h3>Weather App By Me</h3>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
    )
}