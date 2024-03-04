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
  position: absolute;
  top: 0;
`;

const Layout = styled.div`
  padding: 0 20px;
  display: flex;
  margin-top: 39px;
  flex-direction: column;
  gap: 40px;
  height: 100%;
`;

const TypoGraphy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Img = styled.div`
  img {
    width: 100vw;
    height: 100vw;
    object-fit: cover;
  }
`;

const S = { Layout, TypoGraphy, ButtonGroup, Background, Img };

export default S;
