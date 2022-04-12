import ToDoItem from './ToDoItem';

function ToDoTask({elements, onDeleteTask, onCompleteTask}) {
    // .map() a besoin d'une clé key ↓
    const tasksJSX = elements.map(
        element => <ToDoItem {...element} key={element.id}
        onDelete={onDeleteTask}
        onComplete={onCompleteTask}
        />
        )

  return (
      <ul>
        {tasksJSX}
      </ul>
  )
}

ToDoTask.defaultProps = {
    elements: [],
    onFinishedTask: () => {},
    onDeletedTask: () => {}
}

export default ToDoTask