import styled from 'styled-components';

const Layout = styled.div`
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  height: 64px;
  padding: 21px 20px;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;

  .close {
    width: 24px;
    height: 24px;
  }
`;

const Frame = styled.div`
  display: flex;
  padding: 0px 20px 16px 20px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  svg {
    width: 44px;
    height: 44px;
  }

  .ment {
    color: ${(props) => props.theme.color.grey_50};
    height: 22px;
  }
`;

interface ButtonProps {
  state: Boolean;
}

const Button = styled.div<ButtonProps>`
  margin: 0px 20px;
  width: calc(100% - 40px);
  position: relative;
  top: 16px;
  background-color: ${(props) =>
    props.state ? props.theme.color.grey_00 : props.theme.color.grey_90};
  padding: 14px 0px;
  color: ${(props) => props.theme.color.grey_100};
  text-align: center;
  margin-bottom: 24px;
  border-radius: 2px;
`;

const S = { Layout, Header, Frame, Button };

export default S;
