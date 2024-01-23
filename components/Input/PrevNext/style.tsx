import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  width: 100%;
  max-width: 350px;
  height: 42px;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
`;

const LeftButton = styled.button`
  background-color: white;
  border-radius: 2px 0 0 2px;
  color: black;
  width: 30%;
  border: 1px solid black;
  transition: 0.3s;
  height: 42px;
`;
const RightButton = styled.button`
  background-color: black;
  color: white;
  width: 50%;
  transition: 0.3s;
  border-radius: 0 2px 2px 0;
  border: 1px solid black;
  height: 42px;
`;

const S = { Layout, LeftButton, RightButton };

export default S;
