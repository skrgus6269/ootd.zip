import styled from 'styled-components';

interface LayoutProps {
  state: Boolean;
  type?: 'Link' | 'Write';
}

const Layout = styled.div<LayoutProps>`
  background-color: ${(props) =>
    props.state ? props.theme.color.grey_100 : props.theme.color.grey_95};
  border: 1px solid ${(props) => props.theme.color.grey_90};
  flex-grow: 1;
  height: 44px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  position: relative;

  padding: 0 16px;
  ${(props) =>
    props.type === 'Link' &&
    `
    padding: 0 16px 0 42px;
  `}

  p {
    margin-bottom: 0 !important;
  }

  svg {
    color: ${(props) => (props.state ? '' : props.theme.color.grey_80)};
    width: 8px;
    height: 8px;
  }
`;

const LinkIcon = styled.div<LayoutProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 100%;
  left: 16px;

  svg {
    color: ${(props) => props.state && props.theme.color.grey_00};
    width: 24px;
    height: 24px;
  }
`;

const Result = styled.div`
  p {
    padding: 0 !important;
  }
`;

const S = { Layout, LinkIcon, Result };

export default S;
