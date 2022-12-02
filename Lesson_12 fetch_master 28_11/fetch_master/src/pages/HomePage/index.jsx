import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function HomePage() {
  return (
    <div>
      <nav className={s.nav_menu}>
      <Link to='/users_page'>Users</Link>
      <Link to='/products_page'>Products</Link>
      </nav>
      <div className={s.btn}>
      <Link to='/products_page'>
         <button className={s.prod}>Products</button>
      </Link>

      <Link to='/users_page'>
          <button className={s.user}>Users</button>
      </Link>
      </div>
    </div>
  )
}
