import FruitsPage from "../../pages/FruitsPage";
import VegetablesPage from "../../pages/VegetablesPage";
import HomePage from "../../pages/HomePage";
import Nav from "../Nav";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
    <Nav />
    <Routes>

      <Route path="/home/*" element ={<HomePage />}/>
      <Route path="/fruits_page" element ={<FruitsPage />}/>
      <Route path="/vegitables_page" element={<VegetablesPage />}/>
      
    </Routes>
    </div>
  );
}

export default App;