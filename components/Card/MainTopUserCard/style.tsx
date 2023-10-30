import styled from 'styled-components';

const Layout = styled.div`
  padding: 8px 0 16px 4px;
  width: 100%;

  h4 {
    padding-bottom: 4px;
  }

  p,
  h4 {
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export { Layout };
