import styled from 'styled-components';

const Layout = styled.div`
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  height: 64px;
  padding: 21px 20px;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;
const Frame = styled.div`
  display: flex;
  padding: 0px 20px 16px 20px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

const S = { Layout, Header, Frame };

export default S;
