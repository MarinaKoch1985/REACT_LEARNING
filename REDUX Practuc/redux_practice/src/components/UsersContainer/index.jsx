import React from 'react'
import User from '../User'
import { useSelector } from 'react-redux'
import { addUser } from '../../store/userReduser'
import s from './index.module.css'

export default function UsersContainer() {

    const state = useSelector(state => state.users)
  return (
    <div>
        {
            state.map(el => <User key={el.id} {...el} />)
        }
    </div>
  )
}
