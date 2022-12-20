import React from 'react'

export default function LanguageCard({id, rus, eng, lang, delete_card, change_site}) {

  const text = lang === 'rus' ? rus : eng;
  return (
    <div onClick={() => change_site(id)} onDoubleClick={()=> delete_card(id) }>
      {/* <p>Rus: {rus} </p>
      <p>Eng: {eng}</p> */}
      { text }
    </div>
  )
}
