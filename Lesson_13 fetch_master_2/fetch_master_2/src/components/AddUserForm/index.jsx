import React, {useContext} from 'react'
import s from './index.module.css'
import { addUser } from '../../requests/users'
import { Context } from '../../context'

export default function AddUserForm() {

    const {createNewUser} = useContext(Context)

    const submit = event => {
        event.preventDefault();
        const {name, role, avatar} = event.target;
        addUser(
        {
            name: name.value,
            role: role.value,
            // avatar: avatar.value,
            avatar:"https://api.lorem.space/image/face?w=640&h=480&r=4868",
            email: 'example@gmail.com', 
            password: 123
        }, createNewUser);
        name.value = '';
        role.value = '';
        
    }

  return (
    <form onSubmit={submit} className={s.add_user_form}>
        <input type="text" name='name' placeholder='Name' />
        <input type="text" name='role' placeholder='Role' />
        {/* <input type="text" name='avatar' placeholder='Avatar' /> */}
        <button>Add user</button>
    </form>
  )
}
