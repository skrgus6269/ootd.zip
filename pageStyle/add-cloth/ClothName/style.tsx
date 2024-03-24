import styled from 'styled-components';

const Layout = styled.div`
  padding: 0 20px;
  height: 100vh;
  .title {
    margin-top: 40px;
  }
  img {
    margin: 40px 0;
    width: 100%;
    height: calc(100vw - 40px);
    object-fit: cover;
  }
  .helperText {
    margin-top: 8px;
  }
  .nextButton {
    position: absolute;
    bottom: 25px;
    width: calc(100% - 40px);
  }
`;

const S = { Layout };

export default S;
