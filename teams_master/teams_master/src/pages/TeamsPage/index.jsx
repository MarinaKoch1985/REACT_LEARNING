import React from 'react'
import { useContext } from 'react'
import User from '../../components/User'
import { Context } from '../../context'


export default function TeamsPafe() {

  const { users } = useContext(Context)

  return (
    <div>
      {
        users.length 
        ? users.map(el => < User key={el.id} {...el} />)
        : 'No users'
      }
    </div>
  )
}
