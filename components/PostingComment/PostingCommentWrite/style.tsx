import styled from 'styled-components';

const Layout = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 430px;
`;
const CommentWriteState = styled.div`
  background-color: ${(props) => props.theme.color.grey_95};
  padding: 13px 16px;
  display: flex;
  gap: 2px;
  position: relative;
  color: ${(props) => props.theme.color.grey_30};
  display: flex;
  align-items: center;
  border: 1px solid #03030302;

  .taggedUserName {
    font-weight: 600;
    color: black;
  }
  .closeButton {
    color: black;
    position: absolute;
    right: 16px;
  }
`;
const CommentWrite = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  gap: 8px;
  padding: 0px 20px;
`;

const UserImage = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 16px 0;
  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 50%;
  }
  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
const Comment = styled.div`
  flex-grow: 2;
  position: relative;
  display: flex;
  align-items: center;
`;
const Text = styled.div`
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 22px;
  max-height: 84px;
  border: 1px solid #dbdbdb;
  margin: 16px 0;
`;
interface InputProps {
  line: number;
}
const Input = styled.textarea<InputProps>`
  width: 100%;
  padding-right: 36px;
  padding-left: 16px;
  background-color: ${(props) => props.theme.color.grey_95};
  border-radius: 22px;
  border: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  resize: none;
  height: calc(20px * ${(props) => props.line});
  max-height: 60px;
  display: flex;
  align-items: flex-end;
  margin: 8px 0;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: ${(props) => props.theme.color.grey_70};
  }
`;
const Upload = styled.div`
  position: absolute;
  right: 16px;
`;

const S = {
  Layout,
  CommentWriteState,
  UserImage,
  Input,
  Comment,
  Text,
  Upload,
  CommentWrite,
};

export default S;
