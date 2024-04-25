import styled from 'styled-components';

const Layout = styled.div`
  flex-grow: 1;
  height: calc(100vh - 245px);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  .sub {
    color: ${(props) => props.theme.color.grey_50};
  }
`;

const S = { Layout };

export default S;
