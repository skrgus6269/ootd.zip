import styled from 'styled-components';

const Layout = styled.div`
  padding: 0 20px 96px 20px;
`;
const Title = styled.div`
  padding: 21px 0;
`;
const OOTD = styled.div`
  display: flex;
  width: 100%;
  gap: 4px;
  flex-wrap: wrap;

  img {
    width: calc(50% - 2px);
    height: 173px;
    object-fit: cover;
    flex-shrink: 0;
  }
`;

const S = { Layout, Title, OOTD };

export default S;
