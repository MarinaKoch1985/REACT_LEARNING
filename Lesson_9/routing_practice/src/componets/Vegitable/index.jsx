import React from 'react'

export default function Vegitable({title, price, country}) {
  return (
    <div>
        <p>Title: { title }</p>
        <p>Price: { price }</p>
        <p>Country: { country }</p>
    </div>
  )
}
