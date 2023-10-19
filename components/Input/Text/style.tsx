import styled from 'styled-components';

interface LayoutProps {
  size: 'big' | 'small';
}

const Layout = styled.div<LayoutProps>`
  display: inline-flex;
  width: ${(props) => (props.size === 'big' ? '100%' : '167px')};
  height: 42px;
  border-bottom: 2px solid ${(props) => props.theme.color.grey_80};
  &:hover {
    border-bottom: 2px solid ${(props) => props.theme.color.grey_00};
  }
  gap: 2px;
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
  font-size: 24px;
  line-height: 30px;

  :focus {
    outline: none;
  }

  &::placeholder {
    font-size: 16px;
    font-family: 'Pretendard';
  }
`;

const CloseIcon = styled(FlexLayout)`
  align-items: center;
  display: flex;
  width: 24px;
  svg {
    width: 12px;
    height: 12px;
  }
`;

const Unit = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 2px;
`;

const S = { Layout, SearchIcon, SearchInput, Input, CloseIcon, Unit };

export default S;
