import React from 'react'
import s from './index.module.css'
import {useForm} from 'react-hook-form'

export default function ContactsForm() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onBlur'
  });

  const firstnameRegister = register ('firstname', {
    required: '*Field "firstname" is required'
    
  });

  const lastnameRegister = register ('lastname', {
    required: '*Field "lastname" is required'
    
  });

  const messageRegister = register('message', {
    required: '*Field "message" is required'
  });

  const submit = (data) => console.log(data )

  return (
    <div>
    <form onSubmit={handleSubmit(submit)} className={s.contacts_form}>
      <div className={s.name}>

      <label >
        <p>Имя</p>
        <input 
        type="text" 
        name='firstname' 
        placeholder='Иван' 
        {...firstnameRegister} />
      </label>

      <label>
        <p>Фамилия</p>
        <input 
        type="text" 
        name='lastname' 
        placeholder='Иванов' 
        {...lastnameRegister} />
      </label>
      </div>
      

      <label>
        <p>Сообщение</p>
        <textarea t
        ype="text" 
        name='message' 
        placeholder='Ваше сообщение'
        {...messageRegister} />
      </label>

      <button>Отправить сообщение</button>
    </form>

    <div>
      {errors.firstname && <p>{errors.firstname?.message}</p>}
      {errors.lastname && <p>{errors.lastname?.message}</p>}
      {errors.message && <p>{errors.message?.message}</p>}
    </div>

    </div>
    
  )
}
