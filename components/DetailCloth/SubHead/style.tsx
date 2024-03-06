import styled from 'styled-components';

interface LayoutProps {
  state?: string;
}

const Layout = styled.div<LayoutProps>`
  display: flex;
  padding: ${(props) =>
    props.state ? '8px 0px 8px 0px' : '0px 20px 16px 20px'};

  justify-content: flex-end;
  align-items: center;
`;

const Frame = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1 0 0;
  p {
    color: ${(props) => props.theme.color.grey_50};
  }
`;
interface WrapType {
  clicked: string;
}
const Wrap = styled.div<WrapType>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  ${(props) =>
    props.clicked === 'old'
      ? `
    .new {
       color: ${props.theme.color.grey_50};
    }
    `
      : `.old {
       color: ${props.theme.color.grey_50};
    } 
  `}
`;

const S = {
  Layout,
  Frame,
  Wrap,
};

export default S;
