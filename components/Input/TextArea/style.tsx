import styled from 'styled-components';

interface LayoutProps {
  onClickDescriptionState: Boolean;
}

const Layout = styled.div<LayoutProps>`
  width: 100%;
  border: ${(props) =>
    props.onClickDescriptionState
      ? `1px solid ${props.theme.color.grey_00}`
      : `1px solid ${props.theme.color.grey_80}`};
`;

const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  max-width: 350px;
  border-radius: 2px;
  min-height: 116px;
  color: ${(props) => props.theme.color.grey_00};
  padding: 8px 16px 0 16px;
  margin-bottom: 8px;
  border: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  &:focus {
    outline: none;
  }

  ::placeholder {
    color: ${(props) => props.theme.color.grey_80};
    font-size: 14px;
    font-weight: 400px;
    margin-left: 8px;
  }
`;

const TextAreaLength = styled.div`
  width: 100%;
  max-width: 350px;
  position: relative;
  text-align: right;
  bottom: 8px;
  right: 8px;
  color: ${(props) => props.theme.color.grey_80};
`;

const S = { Layout, TextArea, TextAreaLength };

export default S;
