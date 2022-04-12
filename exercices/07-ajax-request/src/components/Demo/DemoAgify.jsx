import axios from "axios";
import React, {useEffect, useState} from "react";


const DemoAgify = () => {
  
  const [name, setName] = useState('Jérôme');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true)
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  // }

  let url = `https://api.agify.io?name=${name}&country_id=BE`;
  
  useEffect(() => {
    
    console.log(url);
    axios.get(url)
    .then(({data}) => {
      setData(data);
    })
    .catch((e) => {
      setError(e.error)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [name]);

  if (!data) return null;

  return (
    <div>
      {loading ? "Chargement ..." : ""}
      <label htmlFor="name">Votre Prénom : </label>
      <input type="text" name="name" id="name" 
      value={name}
      onChange={e => setName(e.target.value)}
      />
      {/* <button onClick={handleSubmit}>Voir votre âge</button> */}
      <h1>Votre age : {data.age}</h1>
      {error}
    </div>
  );
}

export default DemoAgify;