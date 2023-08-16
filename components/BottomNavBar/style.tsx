import styled from 'styled-components';

const Layout = styled.div`
  height: 100%; //BottomNavBar를 아래로 보내기 위함
`;

const MainComponent = styled.div`
  overflow-y: scroll;
  height: calc(100% - 56px); //메인과 바텀바의 분리
`;

const BottomComponent = styled.div`
  height: 56px;
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #ffffff;
`;

const BottomComponentItem = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 24px;
    height: 24px;
  }
`;

export { MainComponent, BottomComponent, Layout, BottomComponentItem };
