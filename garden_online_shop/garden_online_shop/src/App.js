import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CategoriesPage from './pages/CategoriesPage';
import DiscountCoupon from './components/DiscountCoupon';
import ProductsSalePage from './pages/ProductsSalePage';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route path='/'element={ <HomePage /> } />
          <Route path='cart' element={<CartPage />} />
          <Route path='categories' element={<CategoriesPage /> }  /> 
          <Route path='/coupon' element={<DiscountCoupon /> }  />
          <Route path='sales' element={<ProductsSalePage />}/>

        </Route>
      </Routes>
     
    </div>
  );
}

export default App;