import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function ProductCard({ id, title, price, images }) {
  
  return (
    <Link className={s.product_card} to={`/product/${id}`}>
      <img src={images[0]} alt={title} />
      <p>{ title }</p>
      <p>Price: { price }$</p>
    </Link>
  )
}
