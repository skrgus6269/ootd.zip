import styled from 'styled-components';

interface LayoutProps {
  state: Boolean;
}

const Layout = styled.div<LayoutProps>`
  display: inline-flex;
  width: 100%;
  height: 42px;
  border: 1px solid
    ${(props) =>
      props.state ? props.theme.color.grey_00 : props.theme.color.grey_90};
  padding: 8px;
  gap: 8px;
  border-radius: 2px;

  svg {
    width: 24px;
    height: 24px;
    color: ${(props) =>
      props.state ? props.theme.color.grey_00 : props.theme.color.grey_80};
  }
`;

const FlexLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchIcon = styled(FlexLayout)``;

const SearchInput = styled(FlexLayout)`
  flex-grow: 1;
  input {
    ::placeholder {
      font-family: Pretendard;
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
      color: ${(props) => props.theme.color.grey_80};
    }
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0;

  :focus {
    outline: none;
  }
`;

const CloseIcon = styled(FlexLayout)`
  svg {
    width: 12px;
    height: 12px;
  }
`;

export { Layout, SearchIcon, SearchInput, Input, CloseIcon };
