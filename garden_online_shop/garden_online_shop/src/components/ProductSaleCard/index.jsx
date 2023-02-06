import React from 'react'
import s from './index.module.css'



export default function ProductSaleCard({id, title, image, price, discont_price}) {
    
  return (
    <div className={s.product_card}>
        {/* <h1>Акции</h1> */}
        <img src={`http://localhost:3333${image}`} alt={title} />
        <p>{discont_price}€</p>
        <p>Старая цена: {price}€</p>
        <p>{title}</p>

    </div>
  )
}
