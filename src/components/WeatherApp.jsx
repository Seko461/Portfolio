import React, { useEffect, useState, useRef } from 'react'
import '../assets/styles/WeatherApp.css'

const WeatherApp = () => {
    const inputRef = useRef()
    const [weatherData, setWeatherData] = useState(false);



    const search = async (city) => {
        if (!city) {
            alert("enter a city");
            return
        }
        try {
            const apiKey = "ce8f7a737cba13ad56bf84757b8a8bb0"
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

            const res = await fetch(url);
            const data = await res.json();

            if (!res.ok) {
                alert(data.message);
                return
            }
            console.log(data);

            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                description: data.weather[0].description
            })
        } catch (error) {
            setWeatherData(false);
            console.log(error.message);
        }


    }

    useEffect(() => {
        search("Modica")
    }, [])
    return (
        <div>
            <h1>Weather App</h1>
            <div className='searchBar'>
                <input
                    type="text"
                    ref={inputRef}
                    placeholder='type a city'
                    onKeyDown={(e) => {
                        if (e.key === "Enter") { search(inputRef.current.value) }
                    }}
                />
                <button
                    type="submit"
                    onClick={() => search(inputRef.current.value)}
                >Search</button>
            </div>
            {weatherData ? <div className="result">
                <div className="left">
                    <div>location: {weatherData.location}</div>
                    <div>temp: {weatherData.temperature} °C</div>
                    <div>humidity: {weatherData.humidity} %</div>
                    <div>windSpeed: {weatherData.windSpeed} Km/h</div>
                    <div>description: {weatherData.description}</div>


                </div>
                <div className="right">
                    <img src={weatherData.icon} alt="" />
                </div>

            </div> :
                <></>}

        </div>
    )
}

export default WeatherApp
