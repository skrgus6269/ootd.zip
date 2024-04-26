import styled from 'styled-components';

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

const S = { Layout, Span };

export default S;
