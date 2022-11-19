import React from 'react'
import ToDoItem from './ToDoItem'

export default function ToDoContainer({todo}) {
   
  return (
    <div>
        {
            todo.map(todo => <ToDoItem title={todo.title} desct={todo.desct}/>)

        }
    </div>
  )  
}
