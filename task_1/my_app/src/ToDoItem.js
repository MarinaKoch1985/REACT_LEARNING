import React from 'react'

export default function ToDoItem(props) {
     const title = props.title;
     const desct = props.desct;
  return (
    <div>
    <p>{title}</p>
    <p>{desct}</p>
    </div>
  )
}
