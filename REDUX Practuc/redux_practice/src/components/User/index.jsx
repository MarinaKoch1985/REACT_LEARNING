import React from 'react'
import s from './index.module.css'
import { CloseOutlined} from '@ant-design/icons'

export default function User({id, name, age, country, delete_user }) {
  return (
    <div className={s.user_card} >
      <CloseOutlined className={s.X} onClick={() => delete_user(id)} />
      <p>Name: {name} </p>
      <p>Age: {age} </p>
      <p>Country: {country} </p>
      
    </div>
  )
}
