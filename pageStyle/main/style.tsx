import styled from 'styled-components';

interface LayoutProps {
  isExistNotReadAlarm: Boolean;
}

const Layout = styled.div<LayoutProps>`
  ${(props) =>
    props.isExistNotReadAlarm &&
    `
  .bell {
    position: relative; 
  }

  .bell:after {
    content: '';
    position: absolute;
    top: -3px;
    right: -3px;
    width: 6px;
    height: 6px;
    background-color: ${props.theme.color.accent};
    border-radius: 50%;
  }
  `}
  .tabBar {
    padding: 0 4px;
  }
  .bell {
    display: flex;
    align-items: center;
  }
  height: 100vh;
  overflow-y: hidden;
`;
const Curation = styled.div`
  padding: 57px 0 0 20px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 126px;
  height: calc(100vh - 151px);
  overflow-y: scroll;
`;

const Explore = styled.div`
  height: 100vh;
`;

const S = { Layout, Curation, Explore };

export default S;
