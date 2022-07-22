import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
 0%{
 transform: scale(1);
 }
 50%{
 transform: scale(1.2);
 }
 100%{
 transform: scale(1);
 }
`;

export const GoToTopContainer = styled.div`
  position: fixed;
  top: 70%;
  left: 95%;
  width: fit-content;
  border-radius: 50%;
  cursor: pointer;
  padding: 9px 9px;
  background: #de9b1e;
  animation: ${bounce} 2s infinite;
  box-shadow: 0px 0px 19px orange;
  span {
    font-weight: bold;
  }
`;
