
const AddTask = ({nameData, descriptionData, priorityData, handleAddBtn}) => {

    return (
        <>
        <div>
            <button onClick={() => handleAddBtn(nameData, descriptionData, priorityData)}>Ajouter</button>
        </div>
        </>
    )
}

AddTask.defaultProps = {
    handleAddBtn: () => {}
}

export default AddTask