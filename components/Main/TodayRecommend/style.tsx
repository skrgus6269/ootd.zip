import styled from 'styled-components';

const Layout = styled.div``;

const Weather = styled.div`
  p {
    margin: 8px 0 16px 0;
    color: ${(props) => props.theme.color.grey_50};
  }
`;

const CarouselLayout = styled.div`
  img {
    max-width: 350px;
    max-height: 350px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CarouselItem = styled.div`
  padding-right: 8px;
  display: flex !important;
  flex-direction: column;
  gap: 8px;
`;

const S = { Layout, CarouselLayout, Weather, CarouselItem };

export default S;
