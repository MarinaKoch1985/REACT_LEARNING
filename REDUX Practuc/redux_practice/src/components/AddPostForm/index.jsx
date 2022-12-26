import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux';
import { addPost } from '../../store/redusers/postReducer';


export default function AddPostForm() {

  const dispatch = useDispatch();

  const submit = event => {
    event.preventDefault();
    const { title, description } = event.target;
    dispatch(addPost({
      title: title.value,
      description: description.value, 
    }));
    title.value = '';
    description.value = '';
  }
  return (
    <form onSubmit={submit} className={s.add_post_form} >
        <input type="text" name='title' placeholder='Title' />
        <input type="text" name='description' placeholder='Description' />
        <button>Add post</button>
    </form>
  )
}
