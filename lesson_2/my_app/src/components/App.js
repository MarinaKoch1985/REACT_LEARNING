import Users from "./Users";
import Products from "./Products";
import { users } from "../data/users"
import { products } from "../data/products"

function App() {
  
  return (
    <div >
      {/* <Users />
      <Users />
      <Users /> */}
       
      {/* { users.map(el => < Users firstname={el.firstname} lastname={el.lastname} age={el.age} />)} */}

      {users.map(el => < Users {...el } key={el.id}/>)}

      {products.map(el => < Products {...el} key={el.id}/>)}

    </div>
  );
}

export default App;
