import React from 'react'
import { addProduct } from '../../store/reducers/productReduser';
import { useDispatch, useSelector } from 'react-redux'


export default function Products() {

    const dispatch = useDispatch(); // создаем диспетчер
    const state = useSelector(state => state.products);
    console.log(state);

    const submit = event => {
        event.preventDefault();
        const { title, price } = event.target;
        dispatch(addProduct({
            title: title.value,
            price: price.value
        }));
        title.value = '';
        price.value = '';
    }
  return (
    <div>
        <form onSubmit={submit} >
            <input type="text" name='title' placeholder='Title' />
            <input type="text" name='price' placeholder='Price' />
            <button>Add</button>

            <div></div>
        </form>
    </div>
  )
}
