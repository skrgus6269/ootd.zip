import styled from 'styled-components';

interface GenderListSpan {
  state: Boolean;
}

const Layout = styled.div`
  padding: 24px 0 0px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  h5 {
    color: ${(props) => props.theme.color.grey_30};
    padding-left: 20px;
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

const Gender = styled.div`
  padding: 0 20px;
  h3 {
    padding: 22px 0;
  }
`;

const GenderList = styled.div`
  display: flex;
  gap: 8px;
`;

const GenderListSpan = styled.div<GenderListSpan>`
  background-color: ${(props) =>
    props.state ? props.theme.color.grey_00 : props.theme.color.grey_100};
  color: ${(props) =>
    !props.state ? props.theme.color.grey_00 : props.theme.color.grey_100};
  padding: 8px 24px 8px 24px;
  border-radius: 2px;
  border: 1px solid ${(props) => props.theme.color.grey_95};
`;

const Style = styled(Gender)`
  display: flex;
  align-items: center;
  position: relative;
  margin: 32px 0 0 0;
  h3 {
    flex-grow: 1;
  }

  svg {
    position: absolute;
    right: 20px;
    width: 20px;
    height: 20px;
  }
`;

const Open = styled(Gender)`
  flex-grow: 1;
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
  h5 {
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
  Layout,
  OOTDImage,
  Text,
  Gender,
  Style,
  Open,
  GenderList,
  GenderListSpan,
  StyleList,
  StyleListSpan,
  ImageDivider,
};

export default S;
