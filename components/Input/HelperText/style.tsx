import styled from 'styled-components';

interface LayoutProps {
  state: number;
}

const Layout = styled.div<LayoutProps>`
  display: flex;
  align-items: center;
  gap: 2px;
  color: ${(props) =>
    props.state == 1
      ? 'black'
      : props.state == 2
      ? 'red'
      : props.theme.color.correct};
  svg {
    width: 12px;
    height: 12px;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
`;
const S = { Layout, Icon };

export default S;
