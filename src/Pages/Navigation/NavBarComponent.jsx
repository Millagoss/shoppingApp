import React, { useRef, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/083 crown.svg';

import { useGlobalUserContextHook } from '../../contexts/userContext';
import { useGlobalCartStateContextHook } from '../../contexts/cart-dropdown-context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import FooterComponent from '../../components/footer/footer.component';
import GoToTop from '../../components/go-to-top/go-to-top.component';

import {
  LogoContainer,
  NavigationContainer,
  NavLinks,
  NavLink,
} from './navigation.style';

const NavBar = () => {
  const [isGoToTopActive, setIsGoToToActive] = useState(false);
  const { currentUser } = useGlobalUserContextHook();
  const { isCartDropdownOpen, setIsCartDropdownOpen } =
    useGlobalCartStateContextHook();
  const navContainerRef = useRef();

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      navContainerRef.current.style.position = 'fixed';
      navContainerRef.current.style.left = '0';
      navContainerRef.current.style.top = '0';
      setIsGoToToActive(true);
    } else {
      navContainerRef.current.style.position = 'static';
      setIsGoToToActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      <NavigationContainer ref={navContainerRef} onClick={closeDropdown}>
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
      <FooterComponent />
      {isGoToTopActive && <GoToTop />}
    </>
  );
};

export default NavBar;
