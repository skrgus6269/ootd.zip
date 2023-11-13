import styled from 'styled-components';

const Layout = styled.div`
  display: inline-flex;
  width: 100%;
  max-width: 350px;
  height: 42px;
  border: 1px solid ${(props) => props.theme.color.grey_50};
  padding: 8px;
  gap: 8px;
`;

const FlexLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchIcon = styled(FlexLayout)`
  svg {
    width: 18.75px;
    height: 18.75px;
  }
`;
const SearchInput = styled(FlexLayout)`
  flex-grow: 1;
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
