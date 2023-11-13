import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  width: 100%;
  max-width: 350px;
  height: 42px;
`;

interface ButtonProps {
  state: Boolean;
}

const LeftButton = styled.button<ButtonProps>`
  background-color: ${(props) => (props.state ? 'black' : 'white')};
  border-radius: 2px 0 0 2px;
  color: ${(props) => (props.state ? 'white' : 'black')};
  width: 50%;
  border: 1px solid black;
  transition: 0.3s;
`;
const RightButton = styled.button<ButtonProps>`
  background-color: ${(props) => (props.state ? 'white' : 'black')};
  color: ${(props) => (props.state ? 'black' : 'white')};
  width: 50%;
  transition: 0.3s;
  border-radius: 0 2px 2px 0;
  border: 1px solid black;
`;

const S = { Layout, LeftButton, RightButton };

export default S;
