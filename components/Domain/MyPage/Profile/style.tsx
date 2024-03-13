import styled from 'styled-components';

const Layout = styled.div`
  padding: 0 20px;

  .followButton {
    height: 36px;
    margin: 32px 0 40px 0;
  }
  .profile {
    padding: 24px 0;
  }
  border-bottom: 8px solid ${(props) => props.theme.color.grey_95};
`;
const BodyInformation = styled.div`
  display: flex;
  gap: 4px;
  color: ${(props) => props.theme.color.grey_50};
  margin-bottom: 4px;
  align-items: center;
  .dot {
    margin-bottom: 1px;
  }
`;
const Introduce = styled.div``;

const S = { Layout, BodyInformation, Introduce };

export default S;
