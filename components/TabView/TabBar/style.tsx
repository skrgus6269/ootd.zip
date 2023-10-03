import styled from 'styled-components';

interface TabProps {
  focus: Boolean;
}

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  justify-content: space-between;
`;
const Tab = styled.span<TabProps>`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;

  ${(props) =>
    props.focus &&
    `
    border-bottom: 2px solid black;
  `}
`;

export { Layout, Tab };
