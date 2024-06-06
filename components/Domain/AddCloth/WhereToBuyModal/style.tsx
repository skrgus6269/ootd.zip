import styled from 'styled-components';

const Layout = styled.div`
  padding: 0 20px;
`;

const Title = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .title {
    padding: 22px 0;
  }
  .close {
    position: absolute;
    right: 0px;
    width: 24px;
    height: 24px;
  }
`;

const Link = styled.div`
  p {
    padding: 16px 0px;
  }
`;

const Write = styled.div`
  p {
    padding: 32px 0px 16px 0px;
  }
`;

const Main = styled.div`
  height: calc(70vh - 68px);
  overflow: scroll;
`;

const S = { Layout, Title, Link, Write, Main };

export default S;
