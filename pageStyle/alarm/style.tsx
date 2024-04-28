import styled from 'styled-components';

const Layout = styled.div`
  height: calc(100% - 48px);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  .isNotRead {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      right: 0px;
      width: 6px;
      height: 6px;
      left: 17px;
      top: 11px;
      background-color: ${(props) => props.theme.color.accent};
      border-radius: 50%;
    }
  }
`;

const S = { Layout };

export default S;
