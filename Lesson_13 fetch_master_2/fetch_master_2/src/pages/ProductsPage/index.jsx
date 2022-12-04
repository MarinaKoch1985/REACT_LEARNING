import React from 'react'
import { Link } from 'react-router-dom'
import AddProductsForm from '../../components/AddProductsForn'
import ProductsContainer from '../../components/ProductsContainer'

export default function ProductsPage() {
  return (
    <div>
        <Link to='/'>
            <button>Main page</button>
        </Link>

        <AddProductsForm />
        <ProductsContainer />
    </div>
  )
}
