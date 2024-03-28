import styled from 'styled-components';

const Layout = styled.div``;

const Name = styled.div`
  margin-bottom: 4px;
`;

const Info = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
  p {
    color: ${(props) => props.theme.color.grey_50};
  }
  .dot {
    margin: 0 2px;
    margin-bottom: 1px;
  }
`;

const S = { Layout, Info, Name };

export default S;
