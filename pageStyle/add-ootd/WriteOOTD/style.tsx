import styled from 'styled-components';

interface LayoutProps {
  state: Boolean;
}

const Background = styled.div<LayoutProps>`
  background-color: ${(props) => props.theme.color.grey_00};
  display: ${(props) => (props.state ? 'block' : 'none')};
  opacity: 0.3;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
`;

const Layout = styled.div`
  padding: 24px 0 0 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  .selectedPhoto {
    color: ${(props) => props.theme.color.grey_30};
    padding-left: 20px;
  }
  .nextButon {
    position: fixed;
    bottom: 20px;
    padding: 0 20px;
  }
`;

const OOTDImage = styled.div`
  display: flex;
  padding: 8px 0 48px 20px;
  gap: 8px;
  overflow-x: scroll;
  img {
    min-width: 106px;
    width: 106px;
    height: 106px;
    object-fit: cover;
    border-radius: 2px;
  }
`;

const ImageDivider = styled.hr`
  border: 8px solid ${(props) => props.theme.color.grey_95};
  width: 100%;
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
  margin: 32px 0 0 0;

  svg {
    position: absolute;
    right: 20px;
    width: 20px;
    height: 20px;
  }
`;

const Open = styled.div`
  padding: 0 20px 60px 20px;
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

const S = {
  Background,
  Layout,
  OOTDImage,
  Text,
  Style,
  Open,
  StyleList,
  StyleListSpan,
  ImageDivider,
};

export default S;
