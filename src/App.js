import React from 'react';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Pages/Navigation/NavBarComponent';
import Authentication from './Pages/authentication/authentication.page';
import Shop from './Pages/shop/shop';
import CheckOut from './Pages/Checkout/CheckOut';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route path='/shop/*' element={<Shop />} />
        <Route path='/' element={<Home />} />
        <Route path='/authentication' element={<Authentication />} />
        <Route path='/checkout' element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
