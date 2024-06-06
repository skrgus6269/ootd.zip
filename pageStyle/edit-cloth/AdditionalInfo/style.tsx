import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: scroll;
  height: calc(100vh - 116px);
  .prevNextButton {
    width: 100%;
    bottom: 0;
    position: absolute;
  }
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  p {
    margin-bottom: 0 !important;
  }
`;

const ClothImage = styled.div`
  border-bottom: 8px solid ${(props) => props.theme.color.grey_95};
  padding: 24px 20px 56px 20px;
  .writeIcon {
    position: relative;
    width: 20px;
    height: 20px;
    right: 24px;
    bottom: 4px;
  }
`;
const AdditionalInfo = styled.div`
  padding: 0 20px;
  h3 {
    padding: 21px 0px;
  }
  padding-bottom: 60px;
`;
const Title = styled.div`
  margin-bottom: 16px;
`;
const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  .label {
    margin-bottom: 16px;
  }
`;

const S = {
  Layout,
  Category,
  ClothImage,
  AdditionalInfo,
  Title,
  Information,
};

export default S;
