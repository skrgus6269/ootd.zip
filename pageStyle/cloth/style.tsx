import styled from 'styled-components';

const Layout = styled.div`
  padding: 0 20px;
  display: flex;
  margin-top: 39px;
  flex-direction: column;
  gap: 40px;
  height: 100%;
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

const Img = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
`;

const S = { Layout, TypoGraphy, ButtonGroup, Img };

export default S;
