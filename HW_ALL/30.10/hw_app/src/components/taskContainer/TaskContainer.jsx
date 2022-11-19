import React from 'react'
import Task from '../task/Task'

export default function TaskContainer({tasks}) {
  return (
    <div>
        Tasks:
    {

        tasks[0]  
        ? tasks
          .sort((a, b) => a.done - b.done)
          .map(el => <Task key={el.id} {...el} />) : <span> No tasks</span>
    }
    </div>
  )
}                                            













