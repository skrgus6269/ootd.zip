import styled from 'styled-components';

const Layout = styled.div``;

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
  position: fixed;
  bottom: 24px;
  background-color: ${(props) =>
    props.state ? props.theme.color.grey_00 : props.theme.color.grey_90};
  padding: 14px 0px;
  color: #fff;
  text-align: center;
`;

const S = {
  Layout,
  Breadcrumb,
  BreadcrumbText,
  StyleContent,
  Button,
};

export default S;
