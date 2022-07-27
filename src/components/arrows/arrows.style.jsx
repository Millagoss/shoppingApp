import styled from 'styled-components';

export const RightArrowContainer = styled.div`
  height: 2.5rem;
  width: fit-content;
  overflow: hidden;
  top: 45%;
  left: 90%;
  position: absolute;
  box-shadow: 0px 0px 18px orange;
  border-radius: 50%;
  transition: 0.3s ease-in-out;

  .right-icon {
    height: 2.5rem;
    margin-bottom: 0;
    transition: 0.5s ease-in-out;

    &:hover {
      transform: scale(1.3);
    }
  }
`;
export const LeftArrowContainer = styled.div`
  height: 2.5rem;
  width: fit-content;
  overflow: hidden;
  top: 45%;
  left: 5%;
  position: absolute;
  box-shadow: 0px 0px 18px orange;
  border-radius: 50%;
  transition: 0.3s ease-in-out;

  .left-icon {
    height: 2.5rem;
    margin-bottom: 0;
    transition: 0.5s ease-in-out;

    &:hover {
      transform: scale(1.3);
    }
  }
`;
