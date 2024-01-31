import { AiOutlineExclamationCircle } from 'react-icons/ai';
import S from './style';
import Caption from '@/components/UI/TypoGraphy/Caption1';

interface HelperTextType {
  children: React.ReactNode;
  state: number;
  className?: string;
}

export default function HelperText({
  children,
  state,
  className,
}: HelperTextType) {
  return (
    <S.Layout state={state} className={className}>
      <S.Icon>
        <AiOutlineExclamationCircle />
      </S.Icon>
      <Caption>{children}</Caption>
    </S.Layout>
  );
}
