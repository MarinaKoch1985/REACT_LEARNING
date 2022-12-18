import React from 'react'

export default function LanguageCardsItem({id, rus, eng, delete_card, change_site}) {
  return (
    <div onClick={() => delete_card(id)} dbClick={()=> change_site }>
      <p>Rus: {rus} </p>
      <p>Eng: {eng}</p>
    </div>
  )
}
