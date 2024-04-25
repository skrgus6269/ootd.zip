import Portal from '@/components/Portal/index';
import S from './style';

interface ModalProps {
  isOpen: Boolean;
  children: React.ReactNode;
  height: string;
  className?: string;
}

const Modal = ({ isOpen, children, height, className }: ModalProps) => {
  return (
    <Portal>
      <S.Layout
        onTouchMove={(e) => e.stopPropagation()}
        height={height}
        isOpen={isOpen}
        className={className}
      >
        {children}
      </S.Layout>
    </Portal>
  );
};

export default Modal;
