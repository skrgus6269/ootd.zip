import styled from 'styled-components';

const Layout = styled.div`
  .arrowleft,
  .setting {
    width: 24px;
    height: 24px;
  }
`;

const MyAccount = styled.div`
  display: flex;
  padding-bottom: 8px;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 8px solid ${(props) => props.theme.color.grey_95};
`;

const ServiceInfo = styled.div`
  display: flex;
  padding-bottom: 8px;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 8px solid ${(props) => props.theme.color.grey_95};
`;

const Text = styled.div`
  padding: 0px 20px;
  margin: 16px 0px;
  color: #ec0000;
`;

const S = { Layout, MyAccount, ServiceInfo, Text };

export default S;
