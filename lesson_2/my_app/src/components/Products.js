import React from 'react'

export default function ({title, price}) {

    const products_style = {
        border: '1px solid black',
        borderRadius: '10px',
        padding: '10px',
        width: '200px',
        backgroundColor: 'pink'
    }

  return (
    <div style={products_style}>
        <p>Title: {title} </p>
        <p>Price: {price} </p>
    </div>
  )
}
