import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import"./SearchBox.css"
export default function SearchBox({ updateInfo }){
    let [city,setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";

    const API_KEY = "3cc401c50ec54996e155cfd13dce5b13";

    let getWeatherInfo = async()=>{
         let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
         let jsonResponse=   await response.json();
         console.log(jsonResponse);
         let result ={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,// from console we get main.temop_min
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description 
         };
         console.log(result);
         return result;
    }
    let handleChange =(event)=>{
      setCity(event.target.value)
    }
    let handleSubmit=async(event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
     let newInfo =await getWeatherInfo();
     updateInfo(newInfo);


    }
    return(
        <>
        <div className='SearchBox' style={{
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}}>
           
           <form action="" onSubmit={handleSubmit}>
           <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange}/>
           <br /><br />
           <Button variant="contained"  type='submit'>Search</Button>
           </form>
        </div>
        </>
    )
}
