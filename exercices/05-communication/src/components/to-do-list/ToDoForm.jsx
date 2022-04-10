import React, { useState } from 'react';

function ToDoForm(props) {
  
    const priorities = {
      NORMAL: "Normal",
      HIGH: "Haute",
      LOW: "Basse",
    }

  const editProperties = props.edit ? props.edit.value : '';

  const [tname, setTname] = useState(editProperties);
  const [tdesc, setTdesc] = useState(editProperties);
  const [options, setOptions] = useState('Normal')

  const handleSubmit = (e) => {
    e.preventDefault();

    // Déclaration des données de notre to-do card
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      name: tname,
      description: tdesc
    })

    setTname('');
    setTdesc('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="name">            
          <label htmlFor="name">Nom</label>
          <input type="text" name="name" id="name" 
          value={tname}
          onChange={e => setTname(e.target.value)}
          />
      </div>
      <div className="description">            
          <label htmlFor="description">Description</label>
          <input type="text" name="description" id="description" 
          value={tdesc}
          onChange={e => setTdesc(e.target.value)}
          />
      </div>
      <div>
          <label htmlFor="priority">Priorité</label>
          <select name="priority" id="priority"
          value={options}
          onChange={e => setOptions(e.target.value)}>
          {Object.entries(priorities).map(([key,value]) => (
          <option key={key} value={value}>{value}</option>
          ))}
          </select>
      </div>
      <button type="submit">Ajouter</button>
    </form>
  )
}

export default ToDoForm