import styled from 'styled-components';

const Layout = styled.div`
  .arrowleft,
  .setting {
    width: 24px;
    height: 24px;
  }
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

const S = { Layout, Button };

export default S;
