import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Body3 } from '../UI';
import S from './style';

interface ToastProps {
  text: string;
}

export default function Toast({ text }: ToastProps) {
  const [isVisible, setIsVisible] = useState<Boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <S.Layout state={isVisible}>
      <Body3>{text}</Body3>
    </S.Layout>
  );
}
