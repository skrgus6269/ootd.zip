import styled from 'styled-components';

interface BackgroundProps {
  isOpen: Boolean;
}

const Layout = styled.div`
  height: 104vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .nextButton {
    padding-bottom: 0;
    position: fixed;
    padding: 20px 20px;
    bottom: 0;
    background-color: white;
  }
`;

const ClothName = styled.div`
  color: ${(props) => props.theme.color.grey_50};
  padding: 24px 20px 0 20px;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  p {
    margin-bottom: 0 !important;
  }
`;

const Background = styled.div<BackgroundProps>`
  background-color: ${(props) => props.theme.color.grey_00};
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  opacity: 0.3;
  z-index: 2;
  width: 100vw;
  height: calc(100vh - 48px);
  position: fixed;
  top: 0;
`;

const ClothImage = styled.div`
  border-bottom: 8px solid ${(props) => props.theme.color.grey_95};
  padding: 16px 20px 48px 20px;
  img {
    width: 106px;
    height: 106px;
    object-fit: cover;
  }
`;

const BasicInfo = styled.div`
  padding: 0 20px;
  .title {
    padding: 21px 0px;
  }
`;

const Title = styled.div`
  margin-bottom: 16px;
`;

const Information = styled.div`
  p {
    margin-bottom: 16px;
  }
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const S = {
  Layout,
  ClothName,
  Category,
  ClothImage,
  BasicInfo,
  Title,
  Information,
  Background,
};

export default S;
