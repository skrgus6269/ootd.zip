import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  width: 350px;
  height: 42px;
  border: 1px solid black;
  border-radius: 2px;
`;

interface ButtonProps {
  state: Boolean;
}

const LeftButton = styled.button<ButtonProps>`
  background-color: ${(props) => (props.state ? 'black' : 'white')};
  color: ${(props) => (props.state ? 'white' : 'black')};
  width: 50%;
  transition: 0.3s;
`;
const RightButton = styled.button<ButtonProps>`
  background-color: ${(props) => (props.state ? 'white' : 'black')};
  color: ${(props) => (props.state ? 'black' : 'white')};
  width: 50%;
  transition: 0.3s;
`;

const S = { Layout, LeftButton, RightButton };

export default S;
