import styled from 'styled-components';

interface LayoutType {
  type: 'row' | 'column';
}

const Layout = styled.div<LayoutType>`
  display: flex;
  width: 100%;
  gap: 4px;
  flex-wrap: wrap;
  img {
    width: calc(50% - 2px);
    height: 173px;
    object-fit: cover;
    flex-shrink: 0;
  }
  ${(props) =>
    props.type === 'row' &&
    `
    flex-wrap: nowrap;
    overflow-x: scroll;
  `}
`;

const S = { Layout };

export default S;
