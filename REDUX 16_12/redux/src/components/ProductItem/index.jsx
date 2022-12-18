import React from 'react'

export default function ProductItem
({title, price}) {
  return (
    <div>
        <p>Title: {title} </p>
        <p>Price: {price} </p>
    </div>
  )
}
