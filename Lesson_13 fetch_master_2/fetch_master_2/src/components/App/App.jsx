import { getProducts } from '../../requests/products'
import { useState, useEffect } from 'react'
import { Context } from '../../context'
import { Routes, Route } from 'react-router-dom'
import MainPage from '../../pages/MainPage';
import ProductsPage from '../../pages/ProductsPage';
import UsersPage from '../../pages/UsersPage';
import ToDoPage from '../../pages/TodoPage';
import { getUsers } from '../../requests/users'
import { getToDo } from '../../requests/todu'

function App() {

  const [ products, setProducts ] = useState([]);
  const [ users, setUsers ] = useState([]);
  const [ todos, setToDo ] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
    getUsers(setUsers);
    getToDo(setToDo)
  }, []);

  const createNewProduct = product => setProducts(state => [...state, product]);
  const createNewUser = user => setUsers(prev => [...prev, user]);
  const createNewToDo = user => setToDo(prev => [...prev, user]);


  return (
    <div>
      <Context.Provider value={{ products, users, todos, createNewProduct, createNewUser,createNewToDo }}>
        <Routes>
          <Route path='/' element={ <MainPage /> } />
          <Route path='/products' element={ <ProductsPage /> } />
          <Route path='/users' element={ <UsersPage /> } />
          <Route path='/to_du' element={ <ToDoPage /> } />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;