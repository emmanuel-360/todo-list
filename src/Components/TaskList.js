import React, {useContext} from 'react'
import { ListContext } from '../Context/ListContext'
import { FaTrash } from "react-icons/fa"

function TaskList() {
  const {List, deleteTask} = useContext(ListContext)
  
  return (
    <div>
      <div>{List.map((li) => (<div className='m-4 p-3 bg-red-600 hover:bg-red-700 rounded-br-lg md:w-96 md:mx-auto'><p className='font-bold text-white' key={li.id}>{li.title} <button className='float-right text-white' onClick={() => {
        deleteTask(li.id)
        }}><FaTrash/></button></p></div>))}</div>
    </div>
  )
}

export default TaskList