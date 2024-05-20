import styled from 'styled-components';

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  opacity: 0.3;
  background-color: ${(props) => props.theme.color.grey_00};

  .spinner {
    position: absolute;
    opacity: 1;
    z-index: 10;
  }
`;

const S = { Layout };

export default S;
