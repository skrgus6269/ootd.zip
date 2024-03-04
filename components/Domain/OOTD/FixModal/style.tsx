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
  height: 100vh;
  position: fixed;
  top: 0;
`;

const Layout = styled.div``;

const Span = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  .delete {
    color: red;
  }
`;

const S = { Layout, Span, Background };

export default S;
