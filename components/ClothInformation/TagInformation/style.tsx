import styled from 'styled-components';

interface ThemeProps {
  state: 'dark' | 'light';
}

const Layout = styled.div<ThemeProps>`
  display: flex;
  align-items: center;
  position: relative;
  cursor: move;
  gap: 8px;
  padding: 8px;
  height: 100%;
  background-color: ${(props) =>
    props.state === 'dark'
      ? 'rgba(3, 3, 3, 0.7)'
      : 'rgba(255, 255, 255, 0.85)'};
  p {
    color: ${(props) =>
      props.state === 'dark'
        ? props.theme.color.grey_80
        : props.theme.color.grey_30};
  }
  h4 {
    color: ${(props) => (props.state === 'dark' ? 'white' : 'black')};
  }
`;

const ItemImage = styled.div`
  display: flex;
  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
  }
  align-items: center;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const Close = styled.div<ThemeProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: -10px;
  top: -10px;
  width: 24px;
  height: 24px;
  z-index: 2;
  div {
    background-color: white;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    position: absolute;
    width: 10.5px;
    height: 10.5px;
    border-radius: 50%;
    border: none;
    text-align: center;
    path {
      width: 10.5px;
      height: 10.5px;
    }
  }
`;

const S = { Layout, ItemImage, Information, Close };

export default S;
