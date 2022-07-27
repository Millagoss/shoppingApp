import styled from 'styled-components';

export const Footer = styled.footer`
  height: 220px;
  background: #e8ecf1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
  border-radius: 5px;
  color: #e66545;
`;

export const Contact = styled.div`
  width: 59%;
  margin-left: 19%;
  height: fit-content;
  word-wrap: break-word;
  margin-top: 2rem;

  h3 {
    margin-bottom: 1rem;
  }

  h4 {
    letter-spacing: 3px;
    margin-top: 1.2rem;
  }
`;

export const CopyrightContaienr = styled.h4`
  display: flex;
  justify-content: center;
  margin: 0 0 2rem 0;
  align-items: center;

  span {
    height: 2rem;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
  }
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 20px;
  column-gap: 0.5rem;
`;

export const Text = styled.div`
  margin-top: 30px;
  width: fit-content;
  p {
    height: 10rem;
    width: 30vw;
    color: #e66545;
    letter-spacing: 2px;
    margin: 0 auto;
    overflow: scroll;
    overflow-x: hidden;
    word-wrap: break-word;
  }
`;

export const DateContainer = styled.span`
  margin-left: 4px;
  padding: 5px;
`;
