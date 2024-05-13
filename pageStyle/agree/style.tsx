import styled from 'styled-components';

const Layout = styled.div`
  padding: 0px 20px;
  height: calc(100vh - 24px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .symbol {
    margin-top: 32px;
    margin-bottom: 32px;
    display: flex;
    width: 60px;
    height: 60px;
    padding: 2.857px 3.571px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  .agreeButton {
    flex-shrink: 0;
  }
`;

const CheckLayout = styled.div`
  margin-top: 214px;
`;

const Text = styled.div``;

const IconSpan = styled.span`
  display: flex;
  align-items: center;
  width: 24px;
  height: 24px;
  justify-content: center;

  //아이콘 크기
  svg {
    width: 100%;
    height: 100%;
  }
`;

const S = { Layout, CheckLayout, Text, IconSpan };

export default S;
