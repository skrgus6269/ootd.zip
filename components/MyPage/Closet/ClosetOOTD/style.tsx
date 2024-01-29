import styled from 'styled-components';

const Layout = styled.div`
  padding: 0 20px;
`;

interface OOTDSortProps {
  state: Boolean;
}

const OOTDSort = styled.div<OOTDSortProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-end;
  padding: 17px 0;

  svg {
    width: 1px;
    height: 13px;
  }

  .old {
    color: ${(props) => (props.state ? 'black' : props.theme.color.grey_50)};
  }
  .new {
    color: ${(props) => (!props.state ? 'black' : props.theme.color.grey_50)};
  }
`;
const OOTDList = styled.div`
  height: calc(100vh - 220px);
  overflow-y: scroll;
`;

const S = { Layout, OOTDSort, OOTDList };

export default S;
