import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  padding: 16px 20px 32px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const Category = styled.div`
  display: flex;
  /* padding: var(--Number, 0px); */
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

const IconSpan = styled.span`
  display: flex;
  align-items: center;
  width: 22px;
  height: 22px;

  //아이콘 크기
  svg {
    width: 20px;
    height: 20px;
  }
`;

const S = {
  Layout,
  Category,
  IconSpan,
};

export default S;
