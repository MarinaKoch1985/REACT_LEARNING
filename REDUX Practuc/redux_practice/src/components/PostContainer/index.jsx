import React from 'react'
import Post from '../Post'
import { useSelector, useDispatch } from 'react-redux'
import s from './index.module.css'
import { deletePost } from '../../store/redusers/postReducer'


export default function PostContainer() {

    const state = useSelector(state => state.posts );
    const dispatch = useDispatch();

    const delete_post = id => dispatch(deletePost(id));
  return (
    <div className={s.post_container}>
        {
            state.map(el => <Post key={el.id} {...el} delete_post={delete_post} />)
        }
    </div>
  )
}
