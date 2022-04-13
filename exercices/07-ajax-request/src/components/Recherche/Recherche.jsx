import React, { useState } from 'react'
import Meteo from '../Meteo/Meteo';

function Recherche() {

  const [search, setSearch] = useState('')
  const [data, setData] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(search)
    setSearch('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="region"></label>
        <input type="text" name="region" id="region" 
        value={search}
        onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Rechercher...</button>
      </div>
        <Meteo region={data} />
    </form>
  )
}

export default Recherche