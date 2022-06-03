import { useState } from "react"
import Header from "./components/Header";
import Task from "./components/Task";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import 'bootstrap/dist/css/bootstrap.min.css'

const App=() => {
  const [showAddTask, setShowAddTask] = useState
  (false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        title:'Srecko',
        text: 'Srecko',
        day: '9.5.2017',
        reminder: true,
    },
    {
        id: 2,
        title:'Srecko',
        text: 'Masa',
        day: '2015',
        reminder: true,
    },
    {
        id: 3,
        title:'Srecko',
        text: 'Sapa',
        day: '2012',
        reminder: false,
    },
    
    {
      id: 4,
      title:'Srecko',
      text: 'Zuco',
      day: '2008',
      reminder: false,
  },
  ])


  //AddTask
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 
    10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
 

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((Task) => Task.id !==id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id
    ? { ...task, reminder: !task.reminder } :
    task))   
  }


  return (
    <div className="container p-5 my-5 border">
      <Header onAdd={() => setShowAddTask
      (!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} 
      onDelete = {deleteTask} 
      onToggle = {toggleReminder}/> : 'No Task To Show'}
    </div>
  );
}

export default App;
