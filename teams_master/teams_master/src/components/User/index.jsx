import React from 'react'
import { useContext } from 'react'
import { Context } from '../../context'
import s from './index.module.css'

export default function User({ id, name, team}) {

    const {deleteUser} = useContext(Context)

  return (
    <div className={s.user_card} onClick={() => deleteUser(id)}>
        <p>{name}</p>
        <p>{team}</p>
    </div>
  )
}
