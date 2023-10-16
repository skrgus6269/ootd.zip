import styled from 'styled-components';

interface LayoutProps {
  state: number;
}

const Layout = styled.div<LayoutProps>`
  display: flex;
  align-items: center;
  gap: 2px;
  color: ${(props) =>
    props.state == 1 ? 'black' : props.state == 2 ? 'red' : 'green'};
`;

const S = { Layout };

export default S;
