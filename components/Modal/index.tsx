import S from './style';

interface ModalProps {
  isOpen: Boolean;
  children: React.ReactNode;
  height: string;
}

const Modal = ({ isOpen, children, height }: ModalProps) => {
  return (
    <S.Layout height={height} isOpen={isOpen}>
      <S.DragBar>
        <div />
      </S.DragBar>
      {children}
    </S.Layout>
  );
};

export default Modal;
