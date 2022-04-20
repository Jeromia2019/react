import React, { useState } from 'react'
import WeatherFetch from '../apis/WeatherFetch';
import CitySearch from '../search/CitySearch';

function MeteoCorrection() {
  
  const [city, setCity] = useState(null)

  const handleSearch = (city) => {
    console.log(city);
  }

  return (
    <main>
      <CitySearch onSearch={handleSearch}/>
      <WeatherFetch />
    </main>
  )
}

export default MeteoCorrection