import styled from 'styled-components';

const Layout = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 50%;
  margin-left: 25%;

  .text {
    text-align: center;
    color: ${(props) => props.theme.color.grey_50};
  }
`;

const S = { Layout };

export default S;
