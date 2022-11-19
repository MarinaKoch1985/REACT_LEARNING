import React from 'react'
import s from './index.module.css'
import TaskContainer from '../taskContainer/TaskContainer'

export default function Workers({id, firstname, lastname, position, in_office, avatar, tasks}) {

  const card_style= {
    backgroundColor: in_office ? 'lightblue' : 'lightgray',
     color: in_office ? '': 'blue',
     fontSize: firstname === 'Alex' ? '25px' : '' }

     const img_url = avatar ?? './media/no_face.png'// оператор нулевого слияния
  return (
    <div className={s.worker_card} style={card_style}>
        <p>ID: {id}</p>
        <p>Firstname: {firstname}</p>
        <p>Last name: {lastname}</p>
        <p>Position: {position}</p>
        <img alt='worker' src={img_url} />
        <TaskContainer tasks={tasks} />
    </div>
  )
}
