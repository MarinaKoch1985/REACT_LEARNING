import React from 'react'

export default function Products({ title, description, price }) {
  return (
    <div>
        <p>Title: {title}</p>
        <p>Description: {description}</p>
        <p>Price: {price}</p>
    </div>
  )
}
