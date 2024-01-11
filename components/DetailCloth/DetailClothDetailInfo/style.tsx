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
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

const InfoTitle = styled.div`
  display: flex;
  width: 65px;
  padding: 8px;
  align-items: center;
  gap: 8px;
`;

const S = {
  Layout,
  Category,
  InfoTitle,
};

export default S;
