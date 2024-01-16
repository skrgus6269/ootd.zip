import styled from 'styled-components';

//앱바 전체 레이아웃
const Layout = styled.div`
  height: 48px;
  //아래 2속성: 정렬을 위함
  display: flex;
  justify-content: space-between;
  //아래 3속성: 상단 고정을 위함
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 2;
  width: 100%;
`;

//앱바의 왼쪽 영역
const AppBarLeft = styled.div`
  /*아래 6속성: 정렬을 위함 */
  width: 40%;
  height: 48px;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 8px;

  //아이콘 크기
  svg {
    width: 20px;
    height: 20px;
  }
`;

const LeftTouch = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
`;

//앱바의 가운데 영역
const AppBarMiddle = styled.div`
  //아래 3속성: 정렬을 위함
  height: 100%;
  display: flex;
  align-items: center;

  //아이콘 크기
  svg {
    width: 28px;
    height: 28px;
  }
`;

//앱바의 오른쪽 영역
const AppBarRight = styled(AppBarLeft)`
  height: 100%;
  display: flex;
  justify-content: right;

  //아이콘 크기
  svg {
    width: 20px;
    height: 20px;
  }
`;
const RightTouch = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 20px;
`;

export { Layout, AppBarLeft, AppBarMiddle, AppBarRight, LeftTouch, RightTouch };
