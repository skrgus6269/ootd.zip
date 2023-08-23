import styled from 'styled-components';

interface Figure {
  size: string;
}

const ImageFigure = styled.figure<Figure>`
  position: relative;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  img {
    position: relative !important;
    width: 100%;
    height: ${(props) => props.size};
    object-fit: cover;
    /* object-fit: scale-down;/ */
  }
`;

const ImageCaption = styled.figcaption<Figure>`
  width: 33px;
  height: 18px;
  background-color: #030303;
  color: white;
  //아래 3속성: 가운데 정렬
  display: flex;
  align-items: center;
  justify-content: center;
  //아래 2속성: 이미지 정렬
  position: relative;
  bottom: 18.5px;
`;

export { ImageFigure, ImageCaption };
