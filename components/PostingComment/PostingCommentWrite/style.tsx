import styled from 'styled-components';

const Layout = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
const CommentWriteState = styled.div`
  background-color: ${(props) => props.theme.color.grey_95};
  padding: 12px 16px;
  display: flex;
  gap: 2px;
  position: relative;
  color: ${(props) => props.theme.color.grey_30};
  display: flex;
  align-items: center;

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
`;
const Comment = styled.div`
  flex-grow: 2;
  position: relative;
  display: flex;
  align-items: center;
`;
const Text = styled.div`
  width: 100%;
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
  font-family: 'Pretendard';
  height: calc(20px * ${(props) => props.line});
  border: 1px solid ${(props) => props.theme.color.grey_90};
  max-height: 84px;
  display: flex;
  align-items: flex-end;
  padding-top: 8px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-family: 'Pretendard';
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
