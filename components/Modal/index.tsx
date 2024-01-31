import S from './style';

interface ModalProps {
  isOpen: Boolean;
  children: React.ReactNode;
  height: string;
  className?: string;
}

const Modal = ({ isOpen, children, height, className }: ModalProps) => {
  return (
    <S.Layout height={height} isOpen={isOpen} className={className}>
      {children}
    </S.Layout>
  );
};

export default Modal;
