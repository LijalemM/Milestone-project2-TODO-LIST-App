import { useState,} from 'react';
import AddTaskForm from './components/AddTaskForm';
import UpdateForm from './components/UpdateForm';
import ToDo from './components/ToDo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {


const [toDo, setToDo] = useState ([]);


 
const [newTask, setNewTask] = useState('');
const [updateData, setUpdateData] = useState ('');


const addTask = () => {
  if(newTask) {
    let num = toDo.length + 1;
    let newEntry = {id: num, title: newTask, status:false }
    setToDo([...toDo,newEntry])
    setNewTask('');
  }

}


const deleteTask = (id) => {
  let newTask = toDo.filter(task => task.id !== id)
  setToDo(newTask);
  
}


const markDone = (id) => {
  let newTask = toDo.map(task => {
    if(task.id === id){
      return ({...task, status: !task.status}) //toggling the status if it's true change it to false n viseversal
    }
    return task;
  })
  setToDo(newTask);
  
}


const cancelUpdate = () => {
  setUpdateData('');
  
}

 
const changeTask = (e) => {
  let newEntry = {id:updateData.id,
    title:e.target.value, 
    status:updateData.status ? true : false }
    setUpdateData(newEntry);
  
}


const updateTask = (id) => {
  let filterRecords = [...toDo].filter(task => task.id !==updateData.id);
  let updatedObject = [...filterRecords, updateData]
  setToDo(updatedObject);
  setUpdateData('');
}


  return (
    <div className="container App">
      <br/> <br/>
      <h2>Milestone Project_Two ToDo List App </h2>
      <br/><br/>

      {/*form to update task*/} 
      {updateData && updateData ? (
        <UpdateForm 
        updateData={updateData}
        changeTask={changeTask} 
        updateTask={updateTask}
         cancelUpdate={cancelUpdate}
        
        />
        
      ) : (
      <AddTaskForm
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
      />
      ) 
      } 
      
      {/* if there is no task we should desplay some kind of msg */}
      {toDo && toDo.length ? '' : 'No Tasks to display. . . '}

      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
      
    </div>
  );
}

export default App;
