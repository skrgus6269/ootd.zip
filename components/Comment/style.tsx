import styled from 'styled-components';

interface LayoutProps {
  type?: 'child';
}
const Layout = styled.div<LayoutProps>`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 20px;
  ${(props) =>
    props.type === 'child' &&
    `
    margin-left: 40px;
  `}
`;
const UserImage = styled.div`
  .userImage {
    margin-top: 6px;
    border-radius: 50%;
  }
`;
const CommentLeft = styled.div`
  .avatar {
    margin-top: 6px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
const CommentRight = styled.div``;
const UserName = styled.div`
  display: flex;
  gap: 8px;
  .createAt {
    color: ${(props) => props.theme.color.grey_60};
  }
`;
const UserComment = styled.div`
  .taggedUser {
    color: ${(prpos) => prpos.theme.color.correct};
    padding: 0 4px;
    margin-right: 4px;
  }
  white-space: pre-line;
  display: flex;
  color: ${(props) => props.theme.color.grey_30};
  padding: 2px 0 16px 0;
`;
const CommentCommunication = styled.div`
  display: flex;
  gap: 16px;
`;

interface BackgroundProps {
  isOpen: Boolean;
}

const Background = styled.div<BackgroundProps>`
  background-color: ${(props) => props.theme.color.grey_00};
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  opacity: 0.3;
  z-index: 2;
  width: 100vw;
  height: calc(100vh - 48px);
  position: fixed;
  top: 0;
`;

const S = {
  Layout,
  UserImage,
  CommentLeft,
  CommentRight,
  UserName,
  UserComment,
  CommentCommunication,
  Background,
};

export default S;
