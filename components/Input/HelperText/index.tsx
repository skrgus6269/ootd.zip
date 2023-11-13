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
      <S.Icon>
        <AiOutlineExclamationCircle />
      </S.Icon>
      <Caption>{children}</Caption>
    </S.Layout>
  );
}
