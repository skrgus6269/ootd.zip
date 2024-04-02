import styled from 'styled-components';

interface BackgroundProps {
  isOpen: Boolean;
}

const Background = styled.div<BackgroundProps>`
  background-color: ${(props) => props.theme.color.grey_00};
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  opacity: 0.3;
  z-index: 2;
  width: 100vw;
  height: calc(100vh - 48px);
  top: 0;
  position: absolute;
  z-index: 999;
`;

const Layout = styled.div``;

const BookmarkList = styled.div`
  height: calc(100vh - 56px);
  overflow-y: scroll;
  padding: 0px 20px;
`;

const TopButton = styled.div`
  position: fixed;
  bottom: 60px;
  right: 20px;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  z-index: 999;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const S = { Background, Layout, BookmarkList, TopButton };

export default S;
