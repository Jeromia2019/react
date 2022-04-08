import {useState} from 'react'
import AddTask from '../add-task/add-task';

const ToDoList = () => {

    const [prior, setPrior] = useState('Normal');
    const [name, setName] = useState();
    const [description, setDescription] = useState();

    const priorities = {
        NORMAL: "Normal",
        HIGH: "Haute",
        LOW: "Basse",
    }

    const addtask = (nameData, descriptionData, priorityData) => {
        console.log(priorityData);
    }

    return(
        <form>
            <h1>Ajouter une nouvelle tâche</h1>
            <div className="name">            
                <label htmlFor="name">Nom</label>
                <input type="text" name="name" id="name" 
                value={name}
                onChange={e => setName(e.target.value)}/>
            </div>
            <div className="description">            
                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" 
                value={description}
                onChange={e => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="priority">Priorité</label>
                <select name="priority" id="priority"
                value={prior}
                onChange={e => setPrior(e.target.value)}>
                {Object.entries(priorities).map(([key,value]) => (
                <option key={key} value={value}>{value}</option>
                ))}
                </select>
            </div>
            <AddTask handleAddBtn={addtask} priorityData={prior} nameData={name} descriptionData={description}/>
            <h1>Liste des tâches</h1>
        </form>
    )
}

export default ToDoList;