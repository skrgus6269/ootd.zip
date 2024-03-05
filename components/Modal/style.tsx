import styled from 'styled-components';

interface ModalProps {
  isOpen: Boolean;
  height: string;
}

const Layout = styled.div<ModalProps>`
  background-color: white;
  position: fixed;
  z-index: 997;
  bottom: 0px;
  width: 100%;
  height: ${(props) => (props.isOpen ? `${props.height}vh` : '0')};
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

const S = { Layout };

export default S;
