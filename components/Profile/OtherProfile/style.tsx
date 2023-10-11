import styled from 'styled-components';

const Layout = styled.div``;

const Name = styled.div``;

const Info = styled.div`
  p {
    color: ${(props) => props.theme.color.grey_50};
  }
`;

const S = { Layout, Info, Name };

export default S;
