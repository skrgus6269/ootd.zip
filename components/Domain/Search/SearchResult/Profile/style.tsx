import styled from 'styled-components';

const Layout = styled.div`
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: calc(100vh - 174px);
  overflow-y: scroll;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  flex: 1 0 0;
`;

const ProfileLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;

  .userImage {
    width: 52px;
    height: 52px;
    object-fit: cover;
    flex-shrink: 0;
    border-radius: 50%;
  }
`;

const NameText = styled.div`
  flex: 1 0 0;
`;

const S = {
  Layout,
  Profile,
  ProfileLayout,
  NameText,
};

export default S;
