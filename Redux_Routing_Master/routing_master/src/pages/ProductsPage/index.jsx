import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard';
import { getProducts } from '../../requestes/products';
import s from './index.module.css'

export default function ProductsPage() {

    // console.log(useParams());

    const [ products, setProducts ] = useState([]);

    const { category } = useParams();
    // console.log(category);

    useEffect(() => {
        getProducts(category, setProducts)
    }, []);
    
    console.log(products);

  return (
    
    products.length === 0
     ? <p> {category} are louding...</p>
     : <div className={s.products_page}>
        {
            products.map(el => <ProductCard key={el.id} {...el} />)
        }
    </div>
    
  )
}
