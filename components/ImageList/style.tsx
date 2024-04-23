import styled from 'styled-components';

interface LayoutType {
  type: 'row' | 'column';
}

const Layout = styled.div<LayoutType>`
  display: flex;
  width: 100%;
  gap: 4px;
  flex-wrap: wrap;
  ${(props) =>
    props.type === 'row' &&
    `
    flex-wrap: nowrap;
    overflow-x: scroll;
  `}
`;

const Image = styled.div`
  width: calc(50% - 2px);
  height: 0;
  padding-bottom: calc(50% - 2px);
  position: relative;

  .moreIcon {
    position: absolute;
    z-index: 100;
    right: 8px;
    bottom: 8px;
  }
`;

const S = { Layout, Image };

export default S;
