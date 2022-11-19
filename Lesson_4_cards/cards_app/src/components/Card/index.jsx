import React from 'react'
import s from './index.module.css'

export default function Card({ id, eng, rus, lang, change_lang }) {

  const text = lang === 'eng' ? eng : rus;

  const card_style = {
    color: lang === 'eng' ? 'white' : '#2980b9',
    backgroundColor: lang === 'eng' ? '#2980b9' : 'white'
  }

  return (
    <div className={s.word_card} style={card_style} onClick={() => change_lang(id)}>
      { text }
    </div>
  )
}
