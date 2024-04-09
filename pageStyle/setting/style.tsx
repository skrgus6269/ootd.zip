import styled from 'styled-components';

const Layout = styled.div`
  .arrowleft,
  .setting {
    width: 24px;
    height: 24px;
  }
`;

const SettingDiv = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 136px);
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

const AccountInfo = styled.div`
  display: flex;
  padding-bottom: 8px;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 8px solid ${(props) => props.theme.color.grey_95};
`;

const Text = styled.div`
  padding: 0px 20px;
  margin: 16px 0px;
  color: ${(props) => props.theme.color.error};
`;

const Social = styled.div`
  display: flex;
  padding: 16px 20px;
  align-items: center;
  gap: 8px;
  align-self: stretch;

  .socialTitle {
    flex: 1 0 0;
  }

  .socialInfo {
    color: ${(props) => props.theme.color.grey_70};
  }
`;

const S = {
  Layout,
  SettingDiv,
  MyAccount,
  ServiceInfo,
  AccountInfo,
  Text,
  Social,
};

export default S;
