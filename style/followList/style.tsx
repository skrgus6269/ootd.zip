import styled from 'styled-components';

const Layout = styled.div``;

interface BackgroundState {
  isOpen: Boolean;
}

const Background = styled.div<BackgroundState>`
  background-color: ${(props) => props.theme.color.grey_00};
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  opacity: 0.3;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
`;

const S = { Layout, Background };

export default S;
