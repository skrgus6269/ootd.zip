import styled from 'styled-components';

interface LayoutProps {
  size: string;
}

const Layout = styled.div<LayoutProps>`
  //아래 2속성: 정렬
  width: ${(props) => props.size};
  display: flex;
  flex-direction: column;
  height: 225px;
  //아래 1속성: 카드 크기 확인을 위한 임시 속성
  box-sizing: content-box;
`;

const CardBody = styled.div``;

export { Layout, CardBody };
