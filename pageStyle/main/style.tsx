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
`;
const Curation = styled.div`
  margin-top: 57px;
  padding: 0 20px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 126px;
  height: 100vh;
`;

const Explore = styled.div`
  height: 100vh;
`;

const S = { Layout, Curation, Explore };

export default S;
