import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  /* overflow-y: scroll; */
`;
const Title = styled.div`
  padding: 21px 0;
`;
const ColorList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 4px;
`;

const S = { Layout, ColorList, Title };

export default S;
