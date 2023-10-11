import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  width: 390px;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px;
`;

const UserPhoto = styled.div`
  img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }
`;

const UserInfo = styled.div`
  flex-grow: 1;
`;

const Icon = styled.div`
  svg {
    width: 20px;
    height: 20px;
  }
`;

const S = { Layout, UserPhoto, UserInfo, Icon };

export default S;
