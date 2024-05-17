import styled from 'styled-components';

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 430px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  background-color: white;
`;

const Body = styled.div`
  p {
    color: ${(props) => props.theme.color.grey_50};
  }
`;

const Button = styled.div`
  display: flex;
  gap: 8px;

  button {
    padding: 8px 24px;
    border-radius: 2px;
  }
  .left {
    border: 1px solid ${(props) => props.theme.color.grey_00};
    color: ${(props) => props.theme.color.grey_00};
  }
  .right {
    background-color: ${(props) => props.theme.color.grey_00};
    color: ${(props) => props.theme.color.grey_100};
  }
`;

const Alert = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
`;

const S = { Layout, Body, Button, Alert };

export default S;
