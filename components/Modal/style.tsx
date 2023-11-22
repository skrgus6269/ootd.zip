import styled from 'styled-components';

interface ModalProps {
  state: Boolean;
}

const Layout = styled.div<ModalProps>`
  background-color: white;
  position: fixed;
  z-index: 999;
  bottom: 0px;
  width: 100%;
  height: ${(props) => (props.state ? '80%' : '0')};
  flex-direction: column;
  border-radius: 8px 8px 0 0;
  padding: 0 20px;
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
      height: 80%;
    }
  }

  @keyframes fadeOut {
    from {
      height: 80%;
    }
    to {
      height: 0;
    }
  }

  animation: ${(props) =>
    props.state ? 'fadeIn 0.5s ease-in-out' : 'fadeOut 0.5s ease-in-out'};
`;

const S = { Layout };

export default S;
