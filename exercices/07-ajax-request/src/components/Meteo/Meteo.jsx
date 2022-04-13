import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Meteo({region}) {

  const [loading, setLoading] = useState();
  const [data, setData] = useState();
  const [error, setError] = useState();

  const [favoris, setFavoris] = useState([]);

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

  const handleSave = (e) => {
    e.preventDefault();

    const newList = {
      ...data,
      region: data?.region,
      weather: data?.weather
    }

    setFavoris(old => old.region !== data.region && newList)
    
  }

  return (
    <div>
      {loading ? (
        <p>chargement ...</p>
    ) : error ? (
        <p>{error}</p>
    ) : data && (
      <>
        <p>La région : {data.region} - la température : {data.weather}</p>
        <button onClick={handleSave}>Sauvegarder</button>
        <p>Je suis blazé...</p>
        <pre>{JSON.stringify(favoris, null, 2)}</pre>
      </>
    )}
    </div>
  )
}

export default Meteo