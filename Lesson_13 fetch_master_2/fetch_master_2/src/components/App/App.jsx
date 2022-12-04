import { getProducts } from '../../requests/products'
import { useState, useEffect } from 'react'
import { Context } from '../../context'
import { Routes, Route } from 'react-router-dom'
import MainPage from '../../pages/MainPage';
import ProductsPage from '../../pages/ProductsPage';
import UsersPage from '../../pages/UsersPage';
import { getUsers } from '../../requests/users'

function App() {

  const [ products, setProducts ] = useState([]);
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
    getUsers(setUsers);
  }, []);

  const createNewProduct = product => setProducts(state => [...state, product]);
  const createNewUser = user => setUsers(prev => [...prev, user]);

  return (
    <div>
      <Context.Provider value={{ products, users, createNewProduct, createNewUser }}>
        <Routes>
          <Route path='/' element={ <MainPage /> } />
          <Route path='/products' element={ <ProductsPage /> } />
          <Route path='/users' element={ <UsersPage /> } />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;