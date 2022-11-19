import React from 'react'
import s from './index.module.css'

export default function AddPostForn({add_card}) {

    const form_submit = (event) => {
       event.preventDefault();
        const { rus, eng } = event.target;
        add_card(rus.value, eng.value);
        eng.value = '';
        rus.value = '';

    }
  return (
        <form onSubmit={form_submit} className={s.add_form}>
            <input type="text" name='rus' placeholder='Russian'/>
            <input type="text" name='eng' placeholder='English'/>
            <button>Add</button>
        </form>
  )
}
