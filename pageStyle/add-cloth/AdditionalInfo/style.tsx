import styled from 'styled-components';

const Layout = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 48px);
  .nextButton {
    background-color: white;
    bottom: 25px;
    flex-grow: 0;
    position: fixed;
    width: calc(100% - 40px);
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

const BasicInfoFirst = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 24px 0 56px 0;
  .name {
    color: ${(props) => props.theme.color.grey_50};
  }
  img {
    margin-top: 20px;
  }
  hr {
    position: absolute;
    width: 100vw;
    left: -20px;
    color: red;
    border: 4px solid ${(props) => props.theme.color.grey_95};
    bottom: 0;
    margin: 0;
  }
`;
const AdditionalInfo = styled.div`
  .title {
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
  BasicInfoFirst,
  AdditionalInfo,
  Title,
  Information,
};

export default S;
