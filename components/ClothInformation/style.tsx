import styled from 'styled-components';

interface LayoutProps {
  size: 'big' | 'small';
}

const Layout = styled.div<LayoutProps>`
  display: flex;
  width: 100%;
  max-width: ${(props) => (props.size === 'big' ? '350px' : '290px')};
  gap: 16px;
  align-items: center;
`;

const ListImage = styled.div`
  width: 70px;
  img {
    width: 100%;
  }
`;

const Information = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  p {
    color: ${(props) => props.theme.color.grey_50};
  }
`;

const Headline = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  h5 {
    color: ${(props) => props.theme.color.grey_50};
  }
`;

const Divider = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.color.grey_80};
`;

const Body = styled.div``;

const Icon = styled.div`
  svg {
    width: 20px;
    height: 20px;
  }
`;

const BodyFirst = styled.div``;

const BodySecond = styled.div``;

const S = {
  Layout,
  ListImage,
  Headline,
  Information,
  Body,
  Icon,
  BodyFirst,
  BodySecond,
  Divider,
};

export default S;
ListImage;
