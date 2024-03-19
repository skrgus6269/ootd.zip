import styled from 'styled-components';

interface BackgroundState {
  isOpen: Boolean;
}

const Background = styled.div<BackgroundState>`
  background-color: ${(props) => props.theme.color.grey_00};
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  opacity: 0.3;
  z-index: 900;
  top: 0;
  width: 100vw;
  height: 100vh;
  position: absolute;
`;

const Layout = styled.div`
  padding: 0px 20px;
`;

const Breadcrumb = styled.div`
  margin-top: 32px;
  margin-left: 20px;
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

interface TextProps {
  state: Boolean;
}

const BreadcrumbText = styled.div<TextProps>`
  display: flex;
  gap: 4px;
  color: ${(props) =>
    props.state ? props.theme.color.grey_00 : props.theme.color.grey_90};
`;

const SexContent = styled.div`
  padding: 0px 20px;
`;

const StyleContent = styled.div`
  margin-top: 68px;
  padding: 0px 20px;
`;

interface ButtonProps {
  state: Boolean;
}

const Button = styled.div<ButtonProps>`
  margin: 0px 20px;
  width: calc(100% - 40px);
  position: relative;
  top: 24px;
  background-color: ${(props) =>
    props.state ? props.theme.color.grey_00 : props.theme.color.grey_90};
  padding: 14px 0px;
  color: #fff;
  text-align: center;
`;

const S = {
  Background,
  Layout,
  Breadcrumb,
  BreadcrumbText,
  SexContent,
  StyleContent,
  Button,
};

export default S;
