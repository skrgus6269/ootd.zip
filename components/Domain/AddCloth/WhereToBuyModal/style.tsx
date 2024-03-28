import styled from 'styled-components';

const Layout = styled.div`
  padding: 0 20px;
  .nextButton {
    position: fixed;
    bottom: 20px;
    width: calc(100% - 40px);
  }
`;

const Title = styled.div`
  .title {
    padding: 21px 0px;
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

const S = { Layout, Title, Link, Write };

export default S;
