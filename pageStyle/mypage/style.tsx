import styled from 'styled-components';

const Layout = styled.div`
  .arrowleft,
  .setting {
    width: 24px;
    height: 24px;
  }
`;
interface BackgroundState {
  isOpen: Boolean;
}

const Background = styled.div<BackgroundState>`
  background-color: ${(props) => props.theme.color.grey_00};
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  opacity: 0.3;
  z-index: 2;
  width: 100vw;
  height: 130vh;
  top: 0;
  position: absolute;
`;

const S = { Layout, Background };

export default S;
