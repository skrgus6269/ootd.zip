import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  padding: 16px 20px 24px 16px;
  gap: 8px;
  max-width: 430px;
  .leftButton {
    width: 30%;
    height: 48px;
    text-align: center;
    background-color: ${(props) => props.theme.color.grey_100};
    color: ${(props) => props.theme.color.grey_00};
    border: 1px solid ${(props) => props.theme.color.grey_00};
    border-radius: 2px;
  }
  .rightButton {
    height: 48px;
    width: 70%;
    text-align: center;
    background-color: ${(props) => props.theme.color.grey_00};
    color: ${(props) => props.theme.color.grey_100};
    border-radius: 2px;
  }
`;

const S = { Layout };

export default S;
