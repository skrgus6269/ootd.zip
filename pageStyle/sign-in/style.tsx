import styled from 'styled-components';

const Layout = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Logo = styled.div`
  margin-top: 168px;
  svg {
    width: 178px;
    height: 52px;
  }
`;

const Text = styled.div`
  margin-bottom: 8px;
`;

const SocialLoginButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  max-width: 430px;
  margin-bottom: 125px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  justify-content: space-between;
`;

const S = { Layout, SocialLoginButton, Logo, Text, Main };

export default S;
