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
  color: ${(props) => props.theme.color.grey_30};
  padding: 2px 0 16px 0;
  p {
    display: inline;
  }
`;
const CommentCommunication = styled.div`
  display: flex;
  gap: 16px;
`;
const S = {
  Layout,
  UserImage,
  CommentLeft,
  CommentRight,
  UserName,
  UserComment,
  CommentCommunication,
};

export default S;
