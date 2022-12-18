import React from 'react'
import { addCard, deleteCard, changeSite } from '../../store/reducers/languageCardReducer';
import { useDispatch, useSelector } from 'react-redux'
import LanguageCardsItem from '../LanguageCardsItem';

export default function LanguageCard() {

    const dispatch = useDispatch();

    const state = useSelector(state => state.languageCards);

    const submit = event => {
        event.preventDefault();
        const { rus, eng } = event.target;
        dispatch(addCard({
            rus: rus.value,
            eng: eng.value
        }));
        rus.value = '';
        eng.value = '';
    } 

    const delete_card = id => dispatch(deleteCard(id));

    const change_site = id => dispatch(changeSite(id));

  return (
    <div>
    <form onSubmit={submit}>
        <input type="text" name='rus' placeholder='RUS' />
        <input type="text" name='eng' placeholder='Eng' />
        <button>Add</button>
    </form>

    <div>
      {
        state.map(el => <LanguageCardsItem key={el.id} {...el} 
          delete_card={delete_card} 
          change_site={change_site}
           />)
      }
    </div>
    </div>
  )
}
