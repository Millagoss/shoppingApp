import React, { useRef, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/083 crown.svg';

import { useGlobalCartStateContextHook } from '../../contexts/cart-dropdown-context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import FooterComponent from '../../components/footer/footer.component';
import GoToTop from '../../components/go-to-top/go-to-top.component';
import { selectCurrentUser } from '../../store/user/user.selector';

import {
  LogoContainer,
  NavigationContainer,
  NavLinks,
  NavLink,
  Track,
  Profile,
} from './navigation.style';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const currentUser = useSelector(selectCurrentUser);

  const [isGoToTopActive, setIsGoToToActive] = useState(false);

  const { isCartDropdownOpen, setIsCartDropdownOpen } =
    useGlobalCartStateContextHook();

  const navContainerRef = useRef();
  const trackerRef = useRef();

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

  const shiftTracker = (e) => {
    let positionX = e.target.getBoundingClientRect().x + 20;

    if (navContainerRef.current.style.position === 'fixed') {
      positionX = e.target.getBoundingClientRect().x - 20;
    }

    trackerRef.current.style.display = 'block';
    trackerRef.current.style.left = `${positionX}px`;
  };

  useEffect(() => {
    window.addEventListener('resize', removeTracker);
    removeTracker();
    return () => window.removeEventListener('resize', removeTracker);
  }, []);
  const removeTracker = () => {
    trackerRef.current.style.display = 'none';
  };

  const profileRef = useRef();
  const changeProfile = () => {};

  return (
    <>
      <NavigationContainer onClick={closeDropdown} ref={navContainerRef}>
        <LogoContainer onClick={removeTracker} to={'./'}>
          <CrwnLogo className='logo' />
        </LogoContainer>

        <NavLinks>
          <NavLink onClick={shiftTracker} to='./'>
            Home
          </NavLink>
          <NavLink onClick={shiftTracker} to='./shop'>
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink onClick={shiftTracker} to='./authentication'>
              Sign In
            </NavLink>
          )}
          <div onClick={() => setIsCartDropdownOpen(!isCartDropdownOpen)}>
            <CartIcon />
          </div>
          <Profile ref={profileRef} onClick={changeProfile}>
            {currentUser ? (
              <img
                src={currentUser.photoURL}
                alt={currentUser.displayName.slice(0, 1)}
              />
            ) : (
              <i className='fa-solid fa-user'></i>
            )}
          </Profile>
        </NavLinks>
        {isCartDropdownOpen && <CartDropdown />}
      </NavigationContainer>
      <Track ref={trackerRef} />
      <Outlet />
      <FooterComponent />
      {isGoToTopActive && <GoToTop />}
    </>
  );
};

export default NavBar;
