import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function ProductCard({image, title, price, description, product, id}) {
    //const prod_descr_card = product(id);
  return (
    <div className={s.product_card}>
        <Link to={product}> 
            {product}
            <img src={image} alt={title} />
            <div className={s.descr_block}>
                <h3> {title} </h3>
                <p>Description: {description}</p>
                <p>Price: {price}$ </p>
            </div>
        </Link>
        
    </div>
  )
}
