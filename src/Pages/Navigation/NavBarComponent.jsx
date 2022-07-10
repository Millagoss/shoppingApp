import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/083 crown.svg';
import { useGlobalUserContextHook } from '../../contexts/userContext';
import './navigation.scss';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const NavBar = () => {
  const { currentUser } = useGlobalUserContextHook();

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
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='./authentication'>
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
