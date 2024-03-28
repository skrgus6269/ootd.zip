import styled from 'styled-components';

interface TabProps {
  focus: Boolean;
  display: 'inline' | 'block';
}

const Layout = styled.div`
  display: flex;
  width: 100%;
  p {
    padding: 13px 0px;
  }
`;

const Tab = styled.span<TabProps>`
  height: 100%;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  color: ${(props) => props.theme.color.grey_50};
  text-align: center;
  ${(props) =>
    props.focus &&
    `  
    p{ 
      border-bottom: 1px solid black;
      margin: 0;
    }
    color: ${props.theme.color.grey_00}
  `};
  ${(props) =>
    props.display === 'inline' &&
    `
     padding: 0 16px;
  `}
  ${(props) =>
    props.display === 'block' &&
    `
    width: 100%;
    
  `}
`;

const Hr = styled.hr`
  width: 100%;
  margin: 0;
  border: none;
  border-top: 1px solid ${(props) => props.theme.color.grey_90};
`;

export { Layout, Tab, Hr };
