import React from 'react'
import { useSelector } from 'react-redux'
import CartCard from '../../components/CartCard'
import { cartReduser } from '../../store/reducers/cart'
import s from './index.module.css'

export default function CartPage() {

  const cart = useSelector(state => state.cart);

  const total = cart.reduce((prev, {price, count}) => prev + price * count, 0);

  return (
    <div>
      <div>
        {
          cartReduser.map(el => <CartCard key={el.id} {...el} />)
        }
      </div>
      <div className={s.details}>
            <h1>Детали заказа</h1>
            <p>Сумма: { total } p </p>
            <input type="text" placeholder='Ваш номер телефона' name='phone' />
            <button>Заказать</button>
        </div>
    </div>
  )
}
