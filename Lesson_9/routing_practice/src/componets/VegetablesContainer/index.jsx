import React from 'react'
import Vegitable from '../Vegitable'
import { vegetables } from'../../data/vegetables'

export default function VagitablesContainer() {
  return (
    <div>
      {
        vegetables
        .sort((a, b) => a.price - b.price) 
        .map(el => <Vegitable el={el.id} {...el} />)
      }
    </div>
  )
}
