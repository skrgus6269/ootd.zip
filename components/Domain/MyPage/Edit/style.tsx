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

const ButtonWrap = styled.div`
  margin: 0px 20px;
  width: calc(100% - 40px);
  margin-top: 88px;
  background-color: ${(props) => props.theme.color.grey_00};
  padding: 14px 0px;
  color: #fff;
  text-align: center;
`;

const S = { Layout, Background, ButtonWrap };

export default S;
