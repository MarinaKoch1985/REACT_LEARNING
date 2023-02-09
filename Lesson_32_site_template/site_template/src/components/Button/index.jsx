import React from 'react'
import s from './index.module.css'

export default function Button({ children }) {
  return (
    <button className={s.sigp_up_btn}>
      { children }
    </button>
  )
}