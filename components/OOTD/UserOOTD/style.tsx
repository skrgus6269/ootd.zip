import styled from 'styled-components';

const Layout = styled.div`
  padding: 0 20px;
`;
const Title = styled.div`
  padding: 21px 0;
`;
const OOTD = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
  overflow-x: scroll;
  padding-bottom: 48px;
  img {
    width: 167px;
    height: 167px;
    object-fit: cover;
    flex-shrink: 0;
  }
`;

const S = { Layout, Title, OOTD };

export default S;
