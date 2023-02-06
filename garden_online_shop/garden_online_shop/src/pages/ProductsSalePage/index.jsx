import React from 'react'
import { useEffect} from 'react'
import { load_products } from '../../requests/products_req'
import ProductSaleCard from '../../components/ProductSaleCard'
import { useSelector, useDispatch } from 'react-redux';
import s from './index.module.css'

export default function ProductsSalePage() {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

      useEffect(() => {
      dispatch(load_products)
      }, []) 

  return (

    <div>

       <div>
          <span>Price:</span>
          <form>
            <input type="number" placeholder='from' name='min' />
            <input type="number" placeholder='to' name='max' />
            <button>Search</button>
          </form>
        </div>

        <div>
          <span>Sort by:</span>
          <select name="" id="">
            <option value="default">default</option>
            <option value="title">title</option>
            <option value="price">price</option>
          </select>
        </div>

      <h1>Акции</h1>

      <div  className={s.prod_page}>
      {
        products.map(el => <ProductSaleCard key={el.id} {...el} />)
      }
      </div>
    </div>
  )
}