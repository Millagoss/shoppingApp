import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/083 crown.svg';

import { useGlobalUserContextHook } from '../../contexts/userContext';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { useGlobalCartStateContextHook } from '../../contexts/cart-dropdown-context';

import {
  LogoContainer,
  NavigationContainer,
  NavLinks,
  NavLink,
} from './navigation.style';

const NavBar = () => {
  const { currentUser } = useGlobalUserContextHook();
  const { isCartDropdownOpen, setIsCartDropdownOpen } =
    useGlobalCartStateContextHook();

  const closeDropdown = (e) => {
    if (
      e.target.classList.value !== 'shopping-icon' &&
      e.target.classList.value !== 'item-count'
    ) {
      setIsCartDropdownOpen(false);
    }
  };

  return (
    <>
      <NavigationContainer onClick={closeDropdown}>
        <LogoContainer to={'./'}>
          <CrwnLogo className='logo' />
        </LogoContainer>

        <NavLinks>
          <NavLink to='./shop'>Shop</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='./authentication'>Sign In</NavLink>
          )}
          <div onClick={() => setIsCartDropdownOpen(!isCartDropdownOpen)}>
            <CartIcon />
          </div>
        </NavLinks>
        {isCartDropdownOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default NavBar;
