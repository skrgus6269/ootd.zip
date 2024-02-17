import styled from 'styled-components';

interface BackgroundProps {
  isOpen: Boolean;
}

const Background = styled.div<BackgroundProps>`
  background-color: ${(props) => props.theme.color.grey_00};
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  opacity: 0.3;
  z-index: 2;
  width: 100vw;
  height: calc(100vh - 48px);
  position: absolute;
`;

const Layout = styled.div`
  .arrowleft,
  .setting {
    width: 24px;
    height: 24px;
  }
`;

interface ButtonProps {
  state: Boolean;
}

const Button = styled.div<ButtonProps>`
  margin: 0px 20px;
  width: calc(100% - 40px);
  position: relative;
  top: 24px;
  background-color: ${(props) =>
    props.state ? props.theme.color.grey_00 : props.theme.color.grey_90};
  padding: 14px 0px;
  color: #fff;
  text-align: center;
`;

const S = { Background, Layout, Button };

export default S;
