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

const S = { Layout, MyAccount, ServiceInfo };

export default S;
