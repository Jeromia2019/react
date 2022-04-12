import React, { useState } from 'react'
import PriorityEnum from '../../enums/PriorityEnum'

function ToDoForm(props) {


    const [tname, setTName] = useState('');
    const [tdesc, setTdesc] = useState('');
    const [priority, setPriority] = useState(PriorityEnum.NORMAL);


    const handleSubmit = (e) =>{
        e.preventDefault();
        
        const data = { name: tname, desc: tdesc, priority};
        props.onValid(data);
    
        setTName('');
        setTdesc('');
        setPriority(PriorityEnum.NORMAL);
    }

  return (
      <form onSubmit={handleSubmit}>
          <div>
              <label htmlFor="task-name">Nom : </label>
              <input type="text" id='task-name'
              value={tname}
              onChange={(e) => setTName(e.target.value)}
              />
          </div>
          <div>
              <label htmlFor="task-desc">Description : </label>
              <textarea id='task-desc' 
                value={tdesc}
                onChange={(e) => setTdesc(e.target.value)}
              />
          </div>
          <div>
              <label htmlFor="task-priority">priorité : </label>
              <select id='task-priority'
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                  <option value={PriorityEnum.NORMAL}>Normale</option>
                  <option value={PriorityEnum.HIGH}>Haute</option>
                  <option value={PriorityEnum.LOW}>Basse</option>
              </select>
          </div>
          <div>
            <button type="submit">{props.buttonSubmit}</button>
          </div>
      </form>
  )
}

ToDoForm.defaultProps = {
    buttonSubmit: 'Enregistrer',
    onValid: () => {} // NOOP
}

export default ToDoForm