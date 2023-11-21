import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;
`;

const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  max-width: 350px;
  border-radius: 2px;
  border: 1px solid ${(props) => props.theme.color.grey_80};
  min-height: 116px;
  color: ${(props) => props.theme.color.grey_00};
  font-family: 'Pretendard Variable';
  padding: 8px 8px 36px 8px;

  &:focus {
    outline: ${(props) => props.theme.color.grey_00};
    border: 1px solid ${(props) => props.theme.color.grey_00};
  }

  ::placeholder {
    color: ${(props) => props.theme.color.grey_80};
    font-size: 14px;
    font-weight: 400px;
    font-family: 'Pretendard Variable';
    margin-left: 8px;
  }
`;

const TextAreaLength = styled.div`
  width: 100%;
  max-width: 350px;
  position: relative;
  text-align: right;
  bottom: 26px;
  right: 8px;
  color: ${(props) => props.theme.color.grey_80};
`;

const S = { Layout, TextArea, TextAreaLength };

export default S;
