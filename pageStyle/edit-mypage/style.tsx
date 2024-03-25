import styled from 'styled-components';

const Layout = styled.div``;

interface BackgroundProps {
  isOpen: Boolean;
}

const Background = styled.div<BackgroundProps>`
  background-color: ${(props) => props.theme.color.grey_00};
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  opacity: 0.3;
  z-index: 3;
  width: 100vw;
  height: calc(100vh - 48px);
  position: absolute;
`;

const S = { Layout, Background };

export default S;
