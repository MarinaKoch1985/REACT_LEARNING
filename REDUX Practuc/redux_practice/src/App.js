import MainPage from './pages/ManePage'
import UsersPage from './pages/UsersPage'
import PostsPage from './pages/PostsPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
     < Routes >

     <Route path='/' element={<MainPage />}/>
     <Route path='/users' element={<UsersPage />}/>
     <Route path='/posts' element={<PostsPage />}/>
     
     </Routes>
    </div>
  );
}

export default App;
