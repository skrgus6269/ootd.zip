import { AiOutlineExclamationCircle } from 'react-icons/ai';
import S from './style';
import Caption from '@/components/UI/TypoGraphy/Caption1';

interface HelperTextType {
  children: React.ReactNode;
  state: number;
}

export default function HelperText({ children, state }: HelperTextType) {
  return (
    <S.Layout state={state}>
      <AiOutlineExclamationCircle />
      <Caption>{children}</Caption>
    </S.Layout>
  );
}
