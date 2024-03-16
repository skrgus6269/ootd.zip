import styled from 'styled-components';

const Layout = styled.div`
  height: calc(100vh - 100px);
`;

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

interface ButtonProps {
  state: Boolean;
}

const ButtonWrap = styled.div<ButtonProps>`
  margin: 0px 20px;
  width: calc(100% - 40px);
  margin-top: 88px;
  background-color: ${(props) =>
    props.state ? props.theme.color.grey_00 : props.theme.color.grey_90};
  padding: 14px 0px;
  color: ${(props) => props.theme.color.grey_100};
  text-align: center;
`;

const S = { Layout, Background, ButtonWrap };

export default S;
