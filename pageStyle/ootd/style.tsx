import styled from 'styled-components';

const Layout = styled.div``;
const Comment = styled.div``;

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
  position: fixed;
  top: 0;
`;

const S = { Layout, Comment, Background };

export default S;
