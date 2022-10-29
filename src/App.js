import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddToCart from './screens/Cart';
import Home from './screens/Home';
import Login from './screens/Login';
import Products from './screens/Products';
import Signup from './screens/Signup';


function App() {
  return (
    <>
   <Routes>
        <Route index element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<AddToCart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        </Routes>
    </>
  );
}

export default App;
