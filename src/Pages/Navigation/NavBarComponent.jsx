import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/083 crown.svg';
import './navigation.scss';
const NavBar = () => {
  return (
    <>
      <div className='navigation'>
        <div className='logo-container'>
          <Link to={'./'}>
            <CrwnLogo className='logo' />
          </Link>
        </div>
        <div className='nav-links-container'>
          <Link className='nav-link' to='./'>
            Shop
          </Link>
          <Link className='nav-link' to='./authentication'>
            Sign in
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
