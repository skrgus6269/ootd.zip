import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
  .commentLength {
    color: ${(props) => props.theme.color.grey_30};
    padding: 0 20px;
  }
`;

const CommentOpenButton = styled.div`
  padding: 16px 0;
  text-align: center;
  p {
    color: ${(props) => props.theme.color.grey_50};
  }
`;

const CommentNone = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-bottom: 8px solid ${(props) => props.theme.color.grey_95};
  padding: 48px 0;
  gap: 8px;
  .title {
    color: ${(props) => props.theme.color.grey_20};
  }
  .body {
    color: ${(props) => props.theme.color.grey_50};
  }
`;

const S = { Layout, CommentOpenButton, CommentNone };

export default S;
