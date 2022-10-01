import {React, useState, useContext} from 'react'
import { ListContext } from '../Context/ListContext'

function AddTask() {
  const {newTask} = useContext(ListContext)
  const [task, setTask] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    newTask(task)
  }
  return (
    <div>
      <div className='bg-blue-500 p-6 rounded-t-3xl pb-20 h-5/6'>
        <h2 className='font-bold'>ADD NEW TASK</h2>
        <form onSubmit={handleSubmit} className='display: flex flex-col'>
        
            <div className="align-center">
              <input
              className="border-2 border-black rounded-full md:w-3/5 xl:w-2/5 ml-700px w-4/5 mr-2.5" 
              type="text" 
              name="name" 
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="  Input new task here"
            />
            <input type="submit" value="Submit" className='hover:bg-green-600 cursor-pointer m-6 bg-green-500 w-20 mx-auto text-white py-1 rounded-full'/>
            
            </div>
        </form>
      </div>
    </div>
  )
}

export default AddTask