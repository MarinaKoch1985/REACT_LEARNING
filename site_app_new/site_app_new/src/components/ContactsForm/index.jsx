import React from 'react'
import s from './index.module.css'

export default function ContactsForm() {
  return (
    <form className={s.contacts_form}>
      <div className={s.name}>
      <label htmlFor="">
        <p>Имя</p>
        <input type="text" name='firstname' placeholder='Иван' />
      </label>

      <label htmlFor="">
        <p>Фамилия</p>
        <input type="text" name='lastname' placeholder='Иванов' />
      </label>
      </div>
      

      <label htmlFor="">
        <p>Сообщение</p>
        <textarea type="text" name='massege' placeholder='Ваше сообщение' />
      </label>
      <button>Отправить сообщение</button>
    </form>
  )
}
