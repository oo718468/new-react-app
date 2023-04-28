import React from 'react';
import './style/style.css';
import Headers from './Component/Headers';
import Navbar from './Component/Navbar';
import Slider from './Component/Slider';
import Cart from './Component/Cart';
import Banner from './Component/Banner';



function App() {
  return (
    <div>
    <Navbar />
    <Slider />
    <Cart />
 
     </div>
  )
}

export default App