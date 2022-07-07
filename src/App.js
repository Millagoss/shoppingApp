import React from 'react';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Pages/Navigation/NavBarComponent';
import Authentication from './Pages/authentication/authentication.page';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route path='/' element={<Home />} />
        <Route path='/authentication' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
