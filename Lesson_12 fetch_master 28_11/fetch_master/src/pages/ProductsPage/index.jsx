import React from 'react'
import ProductsConteiner from '../../components/ProductsContainer'
import { Link } from 'react-router-dom'

export default function ProductsPage() {
  return (
    <div>
      <Link to='/'>
        <button>Home page</button>
      </Link>
      <ProductsConteiner />
    </div>
  )
}
