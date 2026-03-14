import { useState, useEffect } from "react";
import axios from "axios";

function Weather() {

  const [city, setCity] = useState("Delhi");
  const [weather, setWeather] = useState(null);

  const API_KEY = "c3f28138da23d9f92bb89a5f5ba3df2c";

  const cities = [
    "Delhi","Mumbai","Kolkata","Chennai","Bangalore",
    "Hyderabad","Lucknow","Kanpur","Jaipur","Ahmedabad",
    "London","New York","Tokyo","Paris","Dubai"
  ];

  const fetchWeather = async () => {

    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    setWeather(res.data);
  };

  useEffect(()=>{
    fetchWeather();
  },[]);

return (
  <div className="app">

    <div className="weather-container">

      <h1 className="title">🌤 Weather App</h1>

   <div className="search-box">

  <input
    type="text"
    list="cities"
    value={city}
    onChange={(e)=>setCity(e.target.value)}
    placeholder="Enter city..."
  />

  <datalist id="cities">
    {cities.map((c,index)=>(
      <option key={index} value={c}/>
    ))}
  </datalist>

  <button onClick={fetchWeather}>Search</button>

</div>

      {weather && (

        <div className="weather-cards">

          <div className="card">
            <h3>📍 City</h3>
            <p>{weather.name}</p>
          </div>

          <div className="card">
            <h3>🌡 Temperature</h3>
            <p>{weather.main.temp} °C</p>
          </div>

          <div className="card">
            <h3>💧 Humidity</h3>
            <p>{weather.main.humidity}%</p>
          </div>

          <div className="card">
            <h3>☁ Weather</h3>
            <p>{weather.weather[0].description}</p>
          </div>

        </div>

      )}

    </div>

  </div>
);
}

export default Weather;