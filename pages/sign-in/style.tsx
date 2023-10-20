import styled from 'styled-components';

const Layout = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Logo = styled.div`
  width: 210px;
  height: 210px;
  background-color: ${(props) => props.theme.color.grey_90};
  border-radius: 50%;
  margin: 0 0 32px 0;
`;

const Text = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 27px;
`;

const SocialLoginButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  max-width: 350px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 100%;
`;

const S = { Layout, SocialLoginButton, Logo, Text, Main };

export default S;
