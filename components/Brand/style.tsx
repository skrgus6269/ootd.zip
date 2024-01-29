import styled from 'styled-components';

const Layout = styled.div`
  padding: 12px 20px;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid ${(props) => props.theme.color.grey_95};
  .containKeyword {
    display: flex;
  }
  .selected {
    position: absolute;
    right: 20px;
    width: 24px;
    height: 24px;
  }
`;
const Korean = styled.div``;
const English = styled.div`
  color: ${(props) => props.theme.color.grey_50};
`;

const S = { Layout, Korean, English };

export default S;
