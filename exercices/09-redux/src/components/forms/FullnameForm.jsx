import {React, useState} from 'react';

function FullnameForm({onClick}) {
  
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')

  return (
    <>
      <form onClick={onClick}>
        <input type='text' name='firstname' id='firstname' 
        value={firstname}
        onChange={e => setFirstname(e.target.value)}
        />
      </form>
      <div>
        <input type='text' name='lastname' id='lastname' 
        value={lastname}
        onChange={e => setLastname(e.target.value)}
        />
      </div>
    </>
  );
}

export default FullnameForm;
