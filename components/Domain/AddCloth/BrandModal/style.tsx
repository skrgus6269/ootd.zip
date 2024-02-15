import styled from 'styled-components';

const Layout = styled.div`
  padding: 11px 0 0 0;
  display: flex;
  flex-direction: column;
  height: calc(100% - 88px);

  .nextButton {
    position: absolute;
    bottom: 25px;
    padding: 0 20px;
  }
`;
const Title = styled.div`
  padding: 0 20px;
  position: relative;
  display: flex;
  align-items: center;

  .title {
    padding: 22px 0;
  }
  .close {
    position: absolute;
    right: 20px;
    width: 24px;
    height: 24px;
  }
`;
const Search = styled.div`
  padding: 16px 20px;
`;
const BrandList = styled.div`
  flex-grow: 1;
`;

const SelectedBrand = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
  padding: 16px 20px;
`;

const SelectedBrandSpan = styled.div`
  position: relative;
  flex-shrink: 0;
  padding: 8px 35px 8px 16px;
  background-color: ${(props) => props.theme.color.grey_10};
  color: ${(props) => props.theme.color.grey_100};
  border-radius: 17px;

  .close {
    color: ${(props) => props.theme.color.grey_100};
    position: absolute;
    right: 11px;
    top: 50%;
    transform: translate(0, -50%);
    width: 16px;
    height: 16px;
  }
`;

const S = {
  Layout,
  Title,
  Search,
  BrandList,
  SelectedBrand,
  SelectedBrandSpan,
};

export default S;
