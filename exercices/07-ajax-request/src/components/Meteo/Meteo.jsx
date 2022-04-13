import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Meteo({region}) {

  const [loading, setLoading] = useState();
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {

    setData(null)
    setLoading(true)
    setError(false)

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${region}&appid=d1ebda2f7abb91fbafca997ef67c0d15`)
    .then((res) => {
      setData({
          region: res.data.name,
          weather: res.data.weather[0]?.description ?? 'N/A'
      })
    })
  .catch(e => {
      setError(true)
  })
  .finally(() => {
      setLoading(false)
  })
    
  }, [region])

  return (
    <div>
      {loading ? (
        <p>chargement ...</p>
    ) : error ? (
        <p>{error}</p>
    ) : data && (
      <>
        <p>La région : {data.region} - la température : {data.weather}</p>
        <p>Je suis blazé...</p>
      </>
    )}
    </div>
  )
}

export default Meteo