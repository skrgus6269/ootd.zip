import { Body3 } from '../UI';
import S from './style';

interface ToastProps {
  text: string;
}

export default function ActionSheet({ text }: ToastProps) {
  return (
    <S.Layout>
      <Body3>{text}</Body3>
    </S.Layout>
  );
}
