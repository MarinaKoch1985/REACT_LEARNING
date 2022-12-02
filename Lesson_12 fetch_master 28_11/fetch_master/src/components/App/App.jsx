import {getUsers} from '../../requests/users'
import { getProducts } from '../../requests/products';
import {useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import { Context } from '../../context'
import UsersContainer from '../UsersContainer';
import ProductsConteiner from '../ProductsContainer';
import Nav from '../Nav'
import HomePage from '../../pages/HomePage';
import UsersPage from '../../pages/UsersPage';
import ProductsPage from '../../pages/ProductsPage';

function App() {

  const [ users, setUsers ] = useState([]);
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    getUsers(setUsers)
  }, []) // функция вызывается один раз при перезагрузке страницы
  
  
  // getUsers(setUsers) - функция вызывается много раз

  useEffect(() => {
    getProducts(setProducts)
  }, [])

  return (
    <div>
       <Context.Provider value={{ users, products }}>
        <Routes>
          <Route path='/' element={< HomePage/>}/>
          <Route path='/users_page' element={< UsersPage/>}/>
          <Route path='/products_page' element={< ProductsPage/>}/>
        </Routes>
      </Context.Provider> 
      
      
    </div>
  );
}

export default App;
