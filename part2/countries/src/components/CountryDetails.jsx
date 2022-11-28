import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import "./CountryDetails.css"


const CountryDetails = ({ filtered }) => {

    const [weather, setWeather] = useState(null)

    const api_key = process.env.REACT_APP_API_KEY

    useEffect(() => {

        axios
            .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${filtered[0].name.common}`)
            .then(res => setWeather(res.data))

    }, [])


    console.log({ weather });

    return (
        <>
            <h1>
                {filtered[0].name.common}
            </h1>

            <div className="name">
                <p>capital: {filtered[0].capital}</p>
                <p>area: {filtered[0].area}</p>
            </div>

            <h2>languages:</h2>

            {Object.entries(filtered[0].languages).map((lan, index) => <ul className='lang' key={index}> <li >{lan[1]}</li></ul>)
            }
            <img src={filtered[0].flags.png} alt="flags" />

            {weather !== null &&
                <>
                    <h1>Weather in {filtered[0].name.common}</h1>

                    <div className='pil'> <p>temp is {weather.current.temperature-273.15}celcius</p></div>
                    <div className='pil'><p>temp is {weather.current.wind_speed} m/s</p></div>
                    <div className='pil'><img src={weather.current.weather_icons[0]} alt="" /></div>


                </>
            }
        </>
    )
}

export default CountryDetails
