import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 4px 2px 4px;
  h5 {
    flex-grow: 1;
    color: ${({ theme }) => theme.color.grey_50};
  }
`;

export { Layout };
