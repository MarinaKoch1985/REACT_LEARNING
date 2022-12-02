import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function Nav() {
  return (
    <div className={s.nav_menu}>
        <Link to='/users_page'>Users</Link>
        <Link to='/products_page'>Products</Link>
    </div>
  )
}
