import React from 'react'
import User from '../User'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser } from '../../store/redusers/userReduser';
import s from './index.module.css'

export default function UsersContainer() {

    const state = useSelector(state => state.users);
    const dispatch = useDispatch();

    const delete_user = id => dispatch(deleteUser(id));
  return (
    <div className={s.users_container}>
        {
            state.map(el => <User key={el.id} {...el} delete_user={delete_user} />)
        }
    </div>
  )
}
