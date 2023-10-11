import styled from 'styled-components';

const NeedLogin = styled.div`
  h5 {
    text-decoration: underline;
  }
`;

const Layout = styled.div``;

const Name = styled.div``;

const Info = styled.div`
  p {
    color: ${(props) => props.theme.color.grey_50};
  }
`;

const S = { NeedLogin, Layout, Info, Name };

export default S;
