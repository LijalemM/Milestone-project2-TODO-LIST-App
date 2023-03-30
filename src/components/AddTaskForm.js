const AddTaskForm = ({ newTask, setNewTask, addTask}) => {
    return(
        <>
      
        {/*form to add new task*/}

<div className="row">
  <div className="col">
    <input className="form-control form-control-lg"
    value={newTask} onChange={ (e) => setNewTask(e.target.value)}/>
  </div>
  <div className="col-auto">
    <button onClick={addTask} className="btn btn-lg btn-success"> Add Task
    </button>
  </div>
</div>
<br/>
        </>

    )
}

export default AddTaskForm;