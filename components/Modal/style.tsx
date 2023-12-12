import styled from 'styled-components';

interface ModalProps {
  isOpen: Boolean;
  height: string;
}

const Layout = styled.div<ModalProps>`
  background-color: white;
  position: fixed;
  z-index: 999;
  bottom: 0px;
  width: 100%;
  height: ${(props) => (props.isOpen ? `${props.height}` : '0')};
  flex-direction: column;
  border-radius: 8px 8px 0 0;
  overflow-y: scroll;
  overflow-x: hidden; //가로가 흔들리는 버그 수정
  display: flex;

  .slick-slider {
    margin: 0;
  }

  @keyframes fadeIn {
    from {
      height: 0;
    }
    to {
      height: ${(props) => props.height} !important;
    }
  }

  @keyframes fadeOut {
    from {
      height: ${(props) => props.height};
    }
    to {
      height: 0;
    }
  }

  animation: ${(props) =>
    props.isOpen ? 'fadeIn 0.5s ease-in-out' : 'fadeOut 0.5s ease-in-out'};
`;

const DragBar = styled.div`
  width: 100%;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 36px;
    height: 5.333px;
    border-radius: 2.5px;
    background: var(
      --labels-vibrant-tertiary,
      linear-gradient(
        0deg,
        rgba(61, 61, 61, 0.5) 0%,
        rgba(61, 61, 61, 0.5) 100%
      ),
      rgba(127, 127, 127, 0.4)
    );
  }
`;

const S = { Layout, DragBar };

export default S;
