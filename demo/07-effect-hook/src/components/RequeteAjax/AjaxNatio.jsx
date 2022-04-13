import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AjaxNatio({name}) {

    const [loading, setLoading] = useState();
    const [data, setData] = useState();
    const [error, setError] = useState();

    
    useEffect(() => {

        setData(null)
        setLoading(true)
        setError(false)

        axios.get('https://api.nationalize.io/', {
            params: {
                name
            }
        })
        .then((res) => {
            setData({
                name: res.data.name,
                country: res.data.country[0]?.country_id ?? 'N/A'
            })
        })
        .catch(e => {
            setError(true)
        })
        .finally(() => {
            setLoading(false)
        })


    }, [name])

  return (
    <div>
        <h1>Ajax !</h1>
        {loading ? (
            <p>chargement ...</p>
        ) : error ? (
            <p>Error !</p>
        ) : data && (
            <p>Prénom : {data.name} - pays : {data.country}</p>
        )}
    </div>
  )
}

export default AjaxNatio