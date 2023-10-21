import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;
  position: relative;
`;

const Button = styled.button`
  width: 100%;
  padding: 0;
`;

interface ButtonStringProps {
  platform: 'kakao' | 'google' | 'apple';
}
const ButtonString = styled.div<ButtonStringProps>`
  padding: 15px 0;
  border-radius: 2px;
  border: 1px solid
    ${(props) =>
      props.platform === 'google' ? props.theme.color.grey_90 : 'none'};
  background-color: ${(props) =>
    props.platform === 'kakao'
      ? '#FEE500'
      : props.platform === 'apple'
      ? 'black'
      : 'white'};
  color: ${(props) =>
    props.platform === 'kakao'
      ? 'black'
      : props.platform === 'apple'
      ? 'white'
      : 'black'};
  width: 100%;
  img {
    position: absolute;
    left: 16px;
  }
`;

const S = { Layout, Button, ButtonString };

export default S;
