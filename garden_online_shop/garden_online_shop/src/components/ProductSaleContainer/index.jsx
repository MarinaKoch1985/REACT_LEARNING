import React from 'react'
import { useEffect} from 'react'
import { load_products } from '../../requests/products_req'
import ProductSaleCard from '../ProductSaleCard'
import { useSelector, useDispatch } from 'react-redux';
import s from './index.module.css'


export default function ProductSaleContainer() {
 
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(() => {
        dispatch(load_products)
    }, [])
 
    return (
    
        
    <div className={s.product_container}>
        
        {
            products.slice(0, 4).map(el => <ProductSaleCard key={el.id} {...el} />)
        }
        
    </div>
    
  )
}
