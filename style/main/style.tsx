import styled from 'styled-components';

const Layout = styled.div`
  .bell {
    position: relative;
  }

  .bell:after {
    content: '';
    position: absolute;
    top: -3px;
    right: -3px;
    width: 6px;
    height: 6px;
    background-color: ${(props) => props.theme.color.accent};
    border-radius: 50%;
  }
`;
const Main = styled.div`
  padding: 0 20px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 126px;
`;

const S = { Layout, Main };

export default S;
