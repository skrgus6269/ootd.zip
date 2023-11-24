import styled from 'styled-components';

const Layout = styled.div`
  padding: 0 20px;
  display: flex;
  margin-top: 39px;
  flex-direction: column;
  gap: 40px;
  height: 100%;
  img {
    width: 100%;
    height: 45%;
    max-height: 400px;
    object-fit: cover;
  }
`;

const TypoGraphy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const S = { Layout, TypoGraphy, ButtonGroup };

export default S;
