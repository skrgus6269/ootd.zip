import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  width: 100%;
  gap: 4px;
  flex-wrap: wrap;
`;

const CheckBoxLayout = styled.div`
  position: relative;
  width: calc(50% - 2px);
  height: 0;
  padding-bottom: calc(50% - 2px);

  .clothImage {
    height: 173px;
    flex-shrink: 0;
    width: 100%;
    object-fit: cover;
  }

  .clothImage.checked {
    opacity: 0.5;
  }

  .checkBoxImage {
    position: absolute;
    z-index: 100;
    right: 8px;
    top: 8px;
  }

  .moreIcon {
    position: absolute;
    z-index: 100;
    right: 8px;
    bottom: 8px;
  }
`;

const S = { Layout, CheckBoxLayout };

export default S;
