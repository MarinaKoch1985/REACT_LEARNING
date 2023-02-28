import React from 'react'
import { useDispatch } from 'react-redux'
import { sortProductsCategory, searchProductsCategoryPrice } from '../../store/reducers/products_category'
import s from './index.module.css'

export default function SortProducts() {

    const dispatch = useDispatch();

    const sort_products = event => dispatch(sortProductsCategory(event.target.value));
    const search_products = event => {
        event.preventDefault();
        const { min, max } = event.target;
        const min_value = min.value || 0;
        const max_value = max.value || Infinity;
        dispatch(searchProductsCategoryPrice({ min_value, max_value}))
    }
  return (
    <div className={s.sort}>
        <div className={[s.sort, s.price_sort].join(' ')}>
            <span>Цена</span>
            <form onSubmit={search_products}>
                <input type="number" name="min" placeholder='от' />
                <input type="number" name="max" placeholder='до' />
            </form>
        </div>

        <div className={[s.sort, s.sale_price_sort].join(' ')}>
            <span>Товары со скидкой</span>
            <input type="text" />
        </div>

        <div className={[s.sort, s.sort_by].join(' ')}>
          <span>Сортировать:</span>
          <select onInput={sort_products}>
            <option value="default">по умолчанию</option>
            <option value="title"> по названию</option>
            <option value="price">по цене</option>
          </select>
        </div>

    </div>
    
  )
}
