import styled from 'styled-components';

interface TabProps {
  focus: Boolean;
}

const Layout = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  h5 {
    padding: 14px 0;
  }
`;
const Tab = styled.span<TabProps>`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  padding-bottom: 1px;
  color: ${(props) => props.theme.color.grey_50};
  ${(props) =>
    props.focus &&
    `  
    border-bottom: 2px solid black;
    color: ${props.theme.color.grey_00}
  `};
`;

const Hr = styled.hr`
  width: 100%;
  margin: 0;
  border: 1px solid ${(props) => props.theme.color.grey_90};
`;

export { Layout, Tab, Hr };
