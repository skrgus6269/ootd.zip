import styled from 'styled-components';

interface LayoutProps {
  size: string;
}

const Layout = styled.div<LayoutProps>`
  width: ${(props) => props.size};
  //아래 2속성: 정렬
  display: flex;
  flex-direction: column;
  //아래 1속성: 카드 크기 확인을 위한 임시 속성
  box-sizing: content-box;
`;

const CardBody = styled.div``;

export { Layout, CardBody };
