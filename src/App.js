import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from "./components/home";
import ProductDetail from './components/productDetail';


function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/details/:id' element={<ProductDetail/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
