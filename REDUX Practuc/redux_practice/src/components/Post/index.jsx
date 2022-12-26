import React from 'react'
import { CloseOutlined} from '@ant-design/icons'
import s from './index.module.css'

export default function Post({title, description, id, delete_post}) {
  return (
    <div className={s.post_card}>
        <CloseOutlined className={s.X} onClick={() => delete_post(id)} />
        <h3> {title} </h3>
        <p>{description} </p>
    </div>
  )
}
