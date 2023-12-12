import styled from 'styled-components';

interface SearchResultProps {
  state: Boolean;
}

const Layout = styled.div`
  display: flex;
  gap: 8px;
`;

const SearchResult = styled.div<SearchResultProps>`
  background-color: ${(props) =>
    props.state ? props.theme.color.grey_100 : props.theme.color.grey_95};
  border: 1px solid ${(props) => props.theme.color.grey_90};
  flex-grow: 1;
  height: 44px;
  display: flex;
  align-items: center;
  p {
    margin-bottom: 0 !important;
  }
  svg {
    width: 8px;
    height: 8px;
  }
`;

const SearchIcon = styled.div`
  width: 44px;
  height: 44px;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.color.grey_90};
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const S = { Layout, SearchResult, SearchIcon };

export default S;
