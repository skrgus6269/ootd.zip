import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  width: 375px;
  padding: 0px 20px 16px 20px;
  justify-content: flex-end;
  align-items: center;
`;

const Frame = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1 0 0;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;

const S = {
  Layout,
  Frame,
  Wrap,
};

export default S;
