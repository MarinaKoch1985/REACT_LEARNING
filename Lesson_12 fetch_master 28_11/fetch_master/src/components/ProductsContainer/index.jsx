import React, { useContext} from 'react'
import { Context } from '../../context'
import Products from '../Products'

export default function ProductsConteiner() {

    const { products } = useContext(Context);
  return (
    <div>
        {
            products.map(el => <Products key={el.id} {...el} />)
        }
    </div>
  )
}
