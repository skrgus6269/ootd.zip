import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Layout = styled.div`
  padding: 0 0 48px 20px;
`;
const Title = styled.div`
  padding: 21px 0;
`;
const OOTD = styled.div`
  img {
    padding-right: 2px;
  }
  .slick-track {
    margin: 0;
  }
`;

const S = { Layout, Title, OOTD };

export default S;
