import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Body3, Button3 } from '../UI';
import S from './style';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

interface ToastProps {
  text: string;
  setState?: Dispatch<SetStateAction<Boolean>>;
  className?: string;
  actionText?: string;
  actionFunction?: () => void;
  isHelperText?: Boolean;
}

export default function Toast({
  text,
  setState,
  className,
  actionText,
  actionFunction,
  isHelperText,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState<Boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setState!(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <S.Layout className={className} state={isVisible}>
      {isHelperText && <AiOutlineExclamationCircle />}
      <Body3 className="text">{text}</Body3>
      {actionText && actionFunction && (
        <Button3
          className="actionText"
          onClick={actionFunction}
          state="emphasis"
        >
          {actionText}
        </Button3>
      )}
    </S.Layout>
  );
}
