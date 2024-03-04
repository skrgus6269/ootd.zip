import styled from 'styled-components';

const Layout = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: url('https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
    center;
  background-size: cover;
  .isuser {
    color: ${(props) => props.theme.color.grey_95};
  }
  .login {
    color: ${(props) => props.theme.color.accent};
  }
  .button {
    margin: 24px 0;
  }
`;

const TypoGraphy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
  justify-content: flex-end;
  .headline {
    color: ${(props) => props.theme.color.grey_100};
  }
  .body {
    color: ${(props) => props.theme.color.grey_90};
  }
`;

const Login = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-bottom: 40px;
`;

const S = { Layout, TypoGraphy, Login };

export default S;
