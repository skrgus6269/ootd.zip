import styled from 'styled-components';

interface BackgroundProps {
  isOpen: Boolean;
}

const Layout = styled.div<BackgroundProps>`
  background-color: ${(props) => props.theme.color.grey_00};
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  opacity: 0.3;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
`;

const S = { Layout };

export default S;
