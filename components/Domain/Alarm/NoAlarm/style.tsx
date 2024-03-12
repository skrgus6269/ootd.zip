import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  .title {
    margin-bottom: 8px;
  }
  .body {
    margin-bottom: 2px;
  }
  p {
    color: ${(props) => props.theme.color.grey_50};
  }
`;

const S = { Layout };

export default S;
