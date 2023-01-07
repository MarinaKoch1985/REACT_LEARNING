import React, { useEffect, useState } from 'react'
import { getProduct } from '../../requestes/product'
import { useParams } from 'react-router-dom'

export default function ProductDescrPage() {

    const [ product, setProduct ] = useState([]);
    const { id } = useParams();

    //getProduct(id);

    useEffect(() => {
        getProduct(id, setProduct)
    }, []);

    console.log(product)

    
  return (
    <div>ProductDescrPage</div>
  )
}
