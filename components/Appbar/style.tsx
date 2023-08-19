import styled from 'styled-components';

//앱바 전체 레이아웃
const Layout = styled.div`
  height: 48px;
  //아래 2속성: 정렬을 위함
  display: flex;
  justify-content: space-between;
  //아래 3속성: 상단 고정을 위함
  position: absolute;
  top: 0;
  width: 100%;
`;

//앱바의 왼쪽 영역
const AppbarLeft = styled.div`
  padding: 0 0 0 20px;
  /*아래 6속성: 정렬을 위함 */
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 8px;

  //아이콘 크기
  svg {
    width: 24px;
    height: 24px;
  }
`;

//앱바의 가운데 영역
const AppbarMiddle = styled.div`
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
const AppbarRight = styled(AppbarLeft)`
  padding: 0 20px 0 0;
  //우측 정렬
  justify-content: right;
`;

export { Layout, AppbarLeft, AppbarMiddle, AppbarRight };
