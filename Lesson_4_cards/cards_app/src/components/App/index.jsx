import CardsContainer from "../CardsContainer";
import { words } from '../../Data/words'
import { useState, useEffect } from "react"
import React from "react";
import Triggers from "../Triggers";
import AddPostForn from "../AddPostForm";

function App() {

  const [ cards, setCards ] = useState(words);

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem('cards'));
    setCards(res)
  }, []);// следить за состоянием не нужно, функция запускается один раз при перезагрузке страницы

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards]); // функция выпоняется каждый раз при изменении состояния cards

  // второй аргумент - указание на то, за каким состоянием надо следить

  const change_to_eng = () => {
    setCards(cards.map(el => {
      el.lang = 'eng';
      return el
    }))
  }
  const change_to_rus = () => {
    setCards(cards.map(el => {
      el.lang = 'rus';
      return el
     }))
    
  }

  const change_lang = (id) => {
    setCards(cards.map(el => {
      if(el.id ===id){
        el.lang = el.lang === 'rus' ? 'eng' : 'rus'
      }
      return el
    }))

  }

  // const change_lang = (id) => {
  //   cards[id - 1].lang = cards[id - 1].lang === 'rus' ? 'eng' : 'rus';
  //   setCards([...cards]);
  // }

  const add_card = (rus_value, eng_value) => setCards ([
    ...cards, 
    {
      id: Date.now(),// libo cards.length + 1
      rus: rus_value,
      eng: eng_value,
      lang: 'eng'
    }
  ]);


  return (
    <div>
      <AddPostForn add_card = {add_card}/>
    <CardsContainer words_array = { cards } change_lang = {change_lang}/>
    <Triggers change_to_eng={change_to_eng} change_to_rus={change_to_rus}/>
    </div>
  );
}

export default App;