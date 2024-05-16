import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  padding: 8px 20px;
  align-items: center;
  gap: 16px;
  align-self: stretch;

  img {
    width: 52px;
    height: 52px;
    object-fit: cover;
    flex-shrink: 0;
    border-radius: 50%;
  }

  .userName {
    flex: '1 0 0';
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

const S = {
  Layout,
  Button,
};

export default S;
