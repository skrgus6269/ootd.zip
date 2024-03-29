import styled from 'styled-components';

const Layout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  .title {
    padding: 23px 20px;
  }
  overflow-y: hidden;

  .nextButton {
    position: fixed;
    bottom: 20px;
    padding: 0 20px;
  }
`;

const S = {
  Layout,
};

export default S;
