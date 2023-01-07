import React from 'react'
import s from './index.module.css'

export default function ProductDescrCard({image, title, price, description, product}) {
  return (
    <div className={s.prod_descr_card}>
        <img src={image} alt={title} />
        <div>
            <h3> {title} </h3>
            <p>Description: {description}</p>
            <p>Price: {price}$ </p>
        </div>
    </div>
  )
}
