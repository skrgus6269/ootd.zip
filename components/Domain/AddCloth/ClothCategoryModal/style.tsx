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
const Title = styled.div`
  padding: 0 20px;
  position: relative;
  display: flex;
  align-items: center;

  .title {
    padding: 22px 0;
  }
  .close {
    position: absolute;
    right: 20px;
    width: 24px;
    height: 24px;
  }
`;
const S = {
  Layout,
  Title,
};

export default S;
