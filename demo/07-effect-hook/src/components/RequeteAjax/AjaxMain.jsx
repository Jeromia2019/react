import React, {useState} from 'react'
import AjaxNatio from './AjaxNatio';

function AjaxMain() {

    const [inputName, setInputName] = useState('')
    const [searchName, setSearchName] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchName(inputName)
        setInputName('')
    }

  return (
    <div>
        <h2>Requete Ajax</h2>
        <form onSubmit={handleSubmit}>
        <input type="text" 
        value={inputName}
        onChange={e => setInputName(e.target.value)}
        />
        <button type='submit'>rechercher...</button>
        {searchName && (
            <AjaxNatio name={searchName}/>
        )}
        </form>
    </div>
  )
}

export default AjaxMain