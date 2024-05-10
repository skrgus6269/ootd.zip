import styled from 'styled-components';

const Layout = styled.div`
  padding: 24px 0 0 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .selectedPhoto {
    color: ${(props) => props.theme.color.grey_30};
    padding-left: 20px;
  }
  .nextButon {
    padding: 0 20px 25px 20px;
  }
`;

const OOTDImage = styled.div`
  display: flex;
  padding: 8px 0 48px 20px;
  gap: 8px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  img {
    border-radius: 2px;
  }
  .image {
    position: relative;
  }
  .close {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 16px;
    height: 16px;
    z-index: 1;
    border: none;
    background-color: white;
    border-radius: 50%;
  }
`;

const ImageDivider = styled.hr`
  border: 8px solid ${(props) => props.theme.color.grey_95};
  width: 100%;
  margin: 0;
`;

const Text = styled.div`
  margin: 16px 0 0 0;
  padding: 0 20px 0 20px;
`;

const Style = styled.div`
  padding: 0 20px;
  h2 {
    padding: 22px 0;
  }
  display: flex;
  align-items: center;
  position: relative;

  svg {
    position: absolute;
    right: 20px;
    width: 20px;
    height: 20px;
  }
`;

const Open = styled.div`
  padding: 0 20px 100px 20px;
  h2 {
    padding: 22px 0;
  }
  margin-top: 16px;
`;

const StyleList = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding: 0 20px 0 20px;
`;

const StyleListSpan = styled.div`
  border: 1px solid ${(props) => props.theme.color.grey_00};
  background-color: ${(props) => props.theme.color.grey_10};
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-radius: 17px;

  .selectedStyleList {
    padding: 8px 35px 8px 16px;
    color: ${(props) => props.theme.color.grey_100};
  }
  svg {
    color: ${(props) => props.theme.color.grey_100};
    position: absolute;
    right: 11px;
    width: 16px;
    height: 16px;
  }
`;

const Main = styled.div`
  height: calc(100vh - 116px);
  overflow: scroll;
`;

const S = {
  Layout,
  OOTDImage,
  Text,
  Style,
  Open,
  StyleList,
  StyleListSpan,
  ImageDivider,
  Main,
};

export default S;
