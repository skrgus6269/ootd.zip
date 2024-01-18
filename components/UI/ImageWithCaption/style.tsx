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
  background-color: #030303;
  padding: 3px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;
  bottom: 22px;
  max-width: 40px;
`;

export { ImageFigure, ImageCaption };
