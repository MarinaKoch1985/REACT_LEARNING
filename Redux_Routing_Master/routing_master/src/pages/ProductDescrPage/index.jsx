import React, { useEffect, useState } from 'react'
import { getProduct } from '../../requestes/product'
import { useParams } from 'react-router-dom'
import ProductDescrCard from '../../components/ProductDescrCard';

export default function ProductDescrPage() {

    const [ product, setProduct ] = useState([]);
    const { id } = useParams();

    //getProduct(id);

    useEffect(() => {
        getProduct(id, setProduct)
    }, []);

    console.log(product)

    
  return (
    <div>
        <div>
            {
                product.map(el => <ProductDescrCard key={el.id} {...el} />)
            }
        </div>
    </div>
  )
}
