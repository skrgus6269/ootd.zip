import styled from 'styled-components';

const Layout = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;

  .title {
    margin-top: 40px;
  }
  .helperText {
    margin-top: 8px;
  }
`;

const Image = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  margin: 40px 0;
`;

const Main = styled.div`
  height: calc(100vh - 116px);
  overflow: scroll;
`;

const S = { Layout, Image, Main };

export default S;
