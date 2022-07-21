import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 350px;
  height: 440px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 15px;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  box-shadow: 0 5px 15px rgb(123, 46, 46);

  button {
    margin-top: auto;
    border-radius: 5px;
    box-shadow: 0 5px 10px gray;
    transition: all 0.8s ease-in-out;
  }
`;

export const CartItems = styled.div`
  height: 85%;
  padding: 8px 8px;
  box-shadow: 0 6px 15px rgb(169, 138, 138);
  width: 21.2rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  border: 2px rgb(185, 98, 98, 0.5) solid;
  border-radius: 5px;
`;
export const CartItem = styled.div`
  width: 95%;
  display: flex;
  height: 30%;
  margin: 8px 7px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 0 0px 15px rgb(145, 110, 145, 0.5);
  transition: all 0.5s ease;
  border: 1px rgb(169, 138, 138) solid;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0px 15px rgba(82, 88, 128, 0.5);
  }

  img {
    margin: 2px 1px;
    width: 30%;
    border-radius: 5px;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  .name {
    font-size: 16px;
  }
`;

export const ScrollContainer = styled.div`
  width: 100%;
  height: 500px;
  overflow-y: auto;
  position: relative;
  &::-webkit-scrollbar {
    width: 10px;
    border: 1px solid black;
  }
`;
