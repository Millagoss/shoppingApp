import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/083 crown.svg';
import { useGlobalUserContextHook } from '../../contexts/userContext';
import './navigation.scss';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { useGlobalCartStateContextHook } from '../../contexts/cart-item-context';

const NavBar = () => {
  const { currentUser } = useGlobalUserContextHook();
  const { isCartDropdownOpen, setIsCartDropdownOpen } =
    useGlobalCartStateContextHook();

  return (
    <>
      <div className='navigation'>
        <div className='logo-container'>
          <Link to={'./'}>
            <CrwnLogo className='logo' />
          </Link>
        </div>
        <div className='nav-links-container'>
          <Link className='nav-link' to='./shop'>
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
          <div onClick={() => setIsCartDropdownOpen(!isCartDropdownOpen)}>
            <CartIcon />
          </div>
        </div>
        {isCartDropdownOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
