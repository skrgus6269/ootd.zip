import styled from 'styled-components';

const Layout = styled.div`
  margin: 0px 20px;
  height: calc(100vh - 68px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .editMyPageButton {
    flex-shrink: 0;
  }
`;

const Main = styled.div`
  overflow: scroll;
`;

const S = { Layout, Main };

export default S;
