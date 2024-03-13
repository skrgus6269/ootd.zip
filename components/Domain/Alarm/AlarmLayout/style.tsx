import styled from 'styled-components';
interface LayoutProps {
  index: number;
}

const Layout = styled.div<LayoutProps>`
  border-top: ${(props) =>
    props.index !== 0 && `8px solid ${props.theme.color.grey_95}`};
  .title {
    padding: 21px 20px;
  }
`;

const S = { Layout };

export default S;
