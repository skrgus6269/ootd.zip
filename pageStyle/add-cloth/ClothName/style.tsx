import styled from 'styled-components';

const Layout = styled.div`
  padding: 0 20px;
  height: 100vh;
  .title {
    margin-top: 40px;
  }
  .helperText {
    margin-top: 8px;
  }
  .nextButton {
    position: fixed;
    bottom: 20px;
    width: calc(100% - 40px);
  }
`;

const Image = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  margin: 40px 0;
`;

const S = { Layout, Image };

export default S;
