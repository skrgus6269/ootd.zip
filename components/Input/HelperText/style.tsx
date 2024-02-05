import styled from 'styled-components';

interface LayoutProps {
  state: number;
  className?: string;
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
      : props.state == 3
      ? props.theme.color.grey_50
      : props.theme.color.correct};
  svg {
    width: 12px;
    height: 12px;
  }

  margin-top: ${(props) => (props.className == 'publicText' ? '8px' : '')};
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
`;
const S = { Layout, Icon };

export default S;
