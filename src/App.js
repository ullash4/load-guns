import { useState } from 'react';
import './App.css';
import Guns from './Component/Guns/Guns';
import Header from './Component/Header/Header';

function App() {
  const [cart, setCart] = useState([])
  const countCart=(gun)=>{
    setCart([...cart, gun])
  }
  return (
    <div>
      <Header cart={cart}></Header>
      <Guns countCart={countCart}></Guns>
    </div>
  );
}

export default App;
