import React, { useContext } from 'react'
import { Context } from '../../context'
import CommentsContainer from '../CommentsContainer';
import s from './index.module.css'

export default function Post({ id, title, text, like, comments }) {

    const like_text = like ? 'Liked' : 'Like?';
    const like_style = [s.like_btn, like ? s.like_btn_active : ''].join(' ')

    const { change_like } = useContext(Context)
  return (
    <div className={s.post_item}>
       <p>{ title }</p> 
       <p>{ text }</p>
       <p className={like_style} onClick={() => change_like(id)}>{ like_text }</p>
       <CommentsContainer comments={comments} post_id={id} />
    </div>
  )
}
