import axios from 'axios'
import { useEffect, useState } from 'react';

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const useWeatherAjax = (city) => {

    const [isLoading, setLoading] = useState(true)
    const [onError, setError] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        setLoading(true)
        setError(false)
        setData(null)

        axios
        .get(WEATHER_URL, {
            params: {
                q: city,
                appid: process.env.REACT_APP_WEATHER_KEY,
                units: 'metric',
                lang: 'fr'
            }
        })
        .then((data) => {
            setData({
                id: 21471,
                city: data.name,
                country: data.sys.country,
                weather: data.weather[0].description,
                temperature: data.main.temp,
                iconUrl: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png}`,
                updateDate: new Date(data.dt * 1000)
            })
        })
        .catch((error) => {
            setError(true)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [city])

    return [data, onError, isLoading]

}

