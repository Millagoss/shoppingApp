import React from 'react';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Pages/Navigation/NavBarComponent';
import SignIn from './Pages/SignIn/SignIn';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
