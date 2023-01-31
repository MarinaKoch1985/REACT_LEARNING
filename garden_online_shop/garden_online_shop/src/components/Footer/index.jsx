import React from 'react'
import {InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons'
import s from './index.module.css'

export default function Footer() {
  return (
    <footer className={s.footer}>
        <div className={s.cont_info}>
            <h1>Контакты</h1>
            <p className={s.pfone}>+7 999 999 99 99</p>
            <InstagramOutlined />
            <WhatsAppOutlined />
        </div>
        <div >
            <h1>Адрес</h1>
            <p>г. Космонавтов
               проезд Космонавтов, д.11</p>
             <p>Режим работы</p>  
             <p>Круглосуточно</p>
        </div>
    </footer>
    )
  }
  