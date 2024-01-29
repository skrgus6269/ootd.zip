import styled from 'styled-components';

interface TabProps {
  focus: Boolean;
}

const Layout = styled.div`
  display: flex;
  width: 100%;
  padding-top: 16px;
  justify-content: space-between;
  p {
    padding: 13px 0;
  }
`;
const Tab = styled.span<TabProps>`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${(props) => props.theme.color.grey_50};
  ${(props) =>
    props.focus &&
    `  
    p{

      border-bottom: 2px solid black;
      margin: 0;
    }
    color: ${props.theme.color.grey_00}
  `};
`;

const Hr = styled.hr`
  width: 100%;
  margin: 0;
  border: 1px solid ${(props) => props.theme.color.grey_90};
`;

export { Layout, Tab, Hr };
