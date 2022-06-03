import { useState } from 'react'


const AddTask = ({ onAdd }) => {

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)


  const onSubmit = (e) => {
      e.preventDefault()

      if(!text){
          alert('Pless add a task') 
          return
      }
       onAdd({ title, text, day, reminder })

       setTitle('')
       setText('')
       setDay('')
       setReminder(false) 
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="">
            <label>Task Name</label>
            <input className='form-control' type="text" placeholder="Add Task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="">
            <label>Description</label>
            <input className='form-control' type="text" placeholder="Add Task"
            value={text}
            onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className="">
            <label>Day and Time</label>
            <input className='form-control' type="text" placeholder="Add Day and Time"
            value={day}
            onChange={(e) => setDay(e.target.value)}/>
        </div>
        <div className="form-check mb-3">
            <label>Set Reminder</label>
            <input className='form-check-input' type="checkbox"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>

        <input type="submit" value='Save Task' 
        className="btn btn-dark"/>
    </form>
  )
}

export default AddTask