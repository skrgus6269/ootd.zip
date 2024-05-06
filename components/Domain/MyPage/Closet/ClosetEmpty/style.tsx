import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 72px;
  .text {
    color: ${(props) => props.theme.color.grey_50};
  }
  .button {
    width: 139px;
    height: 36px;
    border: 1px solid black;
    border-radius: 2px;
    color: ${(props) => props.theme.color.grey_00};
  }
`;

const S = { Layout };

export default S;
