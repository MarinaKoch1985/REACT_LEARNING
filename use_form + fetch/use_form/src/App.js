import {getProducts} from './requests/products'
import { useState, useEffect } from 'react'
import ProductsContainer from './components/ProductsContainer';
import { Context } from './context'
import AddProductsForm from './components/AddProductForm'
function App() {

  const [products, setProducts ] = useState([]);

  useEffect(() => {
    getProducts(setProducts)
  }, [])

  const createNewProduct = product => setProducts(prev_state => [...prev_state, { 
    ...product,
    id: Date.now()
  }]);

  return (
    <div >
      <Context.Provider value={{products, createNewProduct}}>
        <AddProductsForm/>
        <ProductsContainer/>
      </Context.Provider>
    </div>
  );
}

export default App;
