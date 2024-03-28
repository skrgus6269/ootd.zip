import styled from 'styled-components';

interface BackgroundState {
  state: Boolean;
}

const Background = styled.div<BackgroundState>`
  background-color: ${(props) => props.theme.color.grey_00};
  display: ${(props) => (props.state ? 'block' : 'none')};
  opacity: 0.3;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
`;

const Layout = styled.div`
  .nextButton {
    padding: 16px 20px 0px 16px;
    position: fixed;
    bottom: 20px;
  }
  .helperText {
    padding: 42px 0 18px 0;
    text-align: center;
    color: #aaaaaa;
  }
  .selectedImage {
  }
`;

interface ImageProps {
  state?: Boolean;
}

const Image = styled.div<ImageProps>`
  position: relative;
  .smallImage {
    width: 106px;
    height: 106px;
    object-fit: cover;
    border-radius: 2px;
    opacity: ${(props) => (props.state ? 0.5 : 1)};
  }
  .bigImage {
    width: 100%;
    height: 100vw;
    object-fit: cover;
    border-bottom: 8px solid ${(props) => props.theme.color.grey_95};
  }
`;

interface ImageListProps {
  imageListlength?: number;
}

const ImageList = styled.div<ImageListProps>`
  margin: 0 16px;
  ${(props) =>
    props.imageListlength! <= 3 &&
    `
    width: calc(106px * ${props.imageListlength} + 8px);
  `}
  .selected {
    color: ${(props) => props.theme.color.grey_30};
    margin: 24px 4px 8px 4px;
    width: 100px;
  }
`;

interface ImageNumberProps {
  state: Boolean;
}

const ImageNumber = styled.div<ImageNumberProps>`
  position: absolute;
  top: 4px;
  right: 8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid
    ${(props) =>
      props.state ? props.theme.color.grey_00 : props.theme.color.grey_100};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  background-color: ${(props) => (props.state ? '#00EACE' : '#9A9A9A')};
`;

const S = { Background, Layout, Image, ImageList, ImageNumber };

export default S;
