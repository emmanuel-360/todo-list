import {React, useContext} from 'react'
import { ListContext } from '../Context/ListContext';
import TaskList from './TaskList';

function Task() {
  const {List} = useContext(ListContext)
  return (
    <div><TaskList /></div>
  )
}

export default Task