import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background: #e6eaecc6;
  z-index: 1;
`;

export const FixedNavContainer = styled(NavigationContainer)`
  position: fixed;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: fit-content;
  padding: 25px;
  display: flex;
  align-items: center;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-transform: uppercase;
  color: black;
`;

export const Track = styled.div`
  height: 3px;
  width: 2rem;
  background: #5b4112;
  position: absolute;
  top: 4.3rem;
  transition: 0.6s ease-in-out;
`;

export const Profile = styled.span`
  color: white;
  background: #d7dbdd;
  height: 3.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  margin: 0 10px 0 17px;
  font-size: 2rem;
  cursor: pointer;

  img {
    width: 3rem;
    border-radius: 50%;
  }
`;
