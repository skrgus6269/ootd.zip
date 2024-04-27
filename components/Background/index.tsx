import { useEffect } from 'react';
import Portal from '../Portal';
import S from './style';

interface BackgroundProps {
  isOpen: Boolean;
  onClick: () => void;
}

export default function Background({ isOpen, onClick }: BackgroundProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = 'auto';
  }, [isOpen]);

  return (
    <Portal>
      <S.Layout
        isOpen={isOpen}
        onClick={onClick}
        onTouchMove={(e) => e.stopPropagation()}
      />
    </Portal>
  );
}
