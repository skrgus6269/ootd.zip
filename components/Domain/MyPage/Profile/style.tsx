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
  .editButton {
    height: 36px;
    margin: 32px 0 40px 0;
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
const Introduce = styled.div`
  p {
    max-width: 100%;
    overflow-x: hidden;
    word-wrap: break-word;
  }
`;

interface ButtonProps {
  state: Boolean;
}

const ButtonWrap = styled.div<ButtonProps>`
  height: 36px;
  margin: 32px 0 40px 0;
  border-radius: 2px;
  background-color: ${(props) =>
    props.state ? props.theme.color.grey_100 : props.theme.color.grey_00};
  padding: 8px 24px;
  border: 1px solid ${(props) => props.theme.color.grey_90};
  color: ${(props) =>
    props.state ? props.theme.color.grey_70 : props.theme.color.grey_100};
  text-align: center;
`;

const S = { Layout, BodyInformation, Introduce, ButtonWrap };

export default S;
