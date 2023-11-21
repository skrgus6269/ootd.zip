import S from './style';

interface ModalProps {
  modalState: Boolean;
  children: React.ReactNode;
}

const Modal = ({ modalState, children }: ModalProps) => {
  return <S.Layout state={modalState}>{children}</S.Layout>;
};

export default Modal;
