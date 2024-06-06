import styled from 'styled-components';

const Layout = styled.div`
  height: calc(100vh - 136px);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding-bottom: 80px;
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
  padding: 24px 20px 48px 20px;

  .writeIcon {
    position: relative;
    width: 20px;
    height: 20px;
    right: 24px;
    bottom: 4px;
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
  .subtitle {
    margin-bottom: 16px;
  }
  .helpertext {
    margin-top: 8px;
  }
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ClothColorSpanList = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
`;

const S = {
  Layout,
  Category,
  ClothImage,
  BasicInfo,
  Title,
  Information,
  ClothColorSpanList,
};

export default S;
