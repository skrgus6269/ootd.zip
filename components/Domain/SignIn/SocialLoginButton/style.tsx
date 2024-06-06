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
  platform: 'KAKAO' | 'NAVER' | 'APPLE';
}
const ButtonString = styled.div<ButtonStringProps>`
  padding: 15px 0;
  border-radius: 2px;
  border: 'none';
  background-color: ${(props) =>
    props.platform === 'KAKAO'
      ? '#FEE500'
      : props.platform === 'APPLE'
      ? 'black'
      : '#03C75A'};
  color: ${(props) => (props.platform === 'KAKAO' ? 'black' : 'white')};
  width: 100%;
  position: relative;
  svg {
    position: absolute;
    left: 16px;
    width: 18px;
    height: 18px;
  }
`;

const S = { Layout, Button, ButtonString };

export default S;
