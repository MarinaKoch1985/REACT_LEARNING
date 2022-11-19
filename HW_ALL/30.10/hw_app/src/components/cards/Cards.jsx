import React from 'react'
import Workers from '../workers/Workers'

export default function Cards({workers}) {
  return (
    <div>
         {
      workers
    //.filter(el => el.in_office)
      .map(el => <Workers key={el.id} {...el}/>)
    }   
    </div>
  )
}
