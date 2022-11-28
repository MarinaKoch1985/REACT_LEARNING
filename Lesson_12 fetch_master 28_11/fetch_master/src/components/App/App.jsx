import {getUsers} from '../../requests/users'
import {useState, useEffect} from 'react'
import {users} from '../../requests/users'
import { Context } from '../../context'
import UsersContainer from '../UsersContainer';

function App() {

  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    getUsers(setUsers)
  }, []) // функция вызывается один раз при перезагрузке страницы
  
  
  // getUsers(setUsers) - функция вызывается много раз

  return (
    <div>
      <Context.Provider value={{ users }}>
        <UsersContainer />
      </Context.Provider>
      App
    </div>
  );
}

export default App;
