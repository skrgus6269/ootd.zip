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
`;
const Main = styled.div`
  padding: 0 20px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 126px;
`;

const S = { Layout, Main };

export default S;
