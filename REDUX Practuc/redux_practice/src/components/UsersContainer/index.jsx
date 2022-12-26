import React from 'react'
import User from '../User'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser } from '../../store/userReduser';

import s from './index.module.css'

export default function UsersContainer() {

    const state = useSelector(state => state.users);
    const disppatch = useDispatch();

    const delete_user = id => disppatch(deleteUser(id));
  return (
    <div className={s.users_container}>
        {
            state.map(el => <User key={el.id} {...el} delete_user={delete_user} />)
        }
    </div>
  )
}
