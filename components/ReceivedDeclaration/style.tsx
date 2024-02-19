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
  padding: 40px 20px 80px 20px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  text-align: center;
`;

const Button = styled.div`
  margin: 0px 20px;
  width: calc(100% - 40px);
  position: relative;
  top: 24px;
  background-color: #ec0000;
  padding: 14px 0px;
  color: #fff;
  text-align: center;
  margin-bottom: 24px;
`;

const S = { Layout, Header, Frame, Button };

export default S;
