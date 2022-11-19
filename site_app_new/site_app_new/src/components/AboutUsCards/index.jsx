import React from 'react'
import s from './index.module.css'

export default function AboutUsCards({value, title, link_title, link_url}) {
  return (
    <div className={s.about_as_card}>
        <p> {value} </p>
        <p> {title} </p>
        <a href={link_url}>{link_title}</a>
        </div>
  )
}
