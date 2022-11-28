import React from 'react'
import s from './index.module.css'
import { useContext } from 'react'
import { Context } from '../../context'

export default function Comment({post_id, id, comment}) {

  const {  delete_comment } = useContext(Context)
  return (
    <div className={s.comment_item} onClick={() => delete_comment(post_id, id)}>
      { comment }
    </div>
  )
}

