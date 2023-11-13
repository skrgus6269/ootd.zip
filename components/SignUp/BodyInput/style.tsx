import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BodyLayout = styled.div`
  display: flex;
  gap: 16px;
`;

const Weight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Height = styled(Weight)``;

const OpenBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const S = { Layout, BodyLayout, Weight, Height, OpenBody };

export default S;
