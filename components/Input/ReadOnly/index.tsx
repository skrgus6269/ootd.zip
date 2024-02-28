import { AiOutlineLink } from 'react-icons/ai';
import S from './style';

interface ReadOnlyProps {
  state: Boolean;
  result: React.ReactNode;
  type?: 'Link' | 'Write';
  onClick?: any;
}

export default function ReadOnly({
  state,
  result,
  type,
  onClick,
}: ReadOnlyProps) {
  return (
    <S.Layout state={state} type={type} onClick={onClick}>
      {type === 'Link' && (
        <S.LinkIcon state={state}>
          <AiOutlineLink />
        </S.LinkIcon>
      )}
      {state === true && <S.Result>{result}</S.Result>}
    </S.Layout>
  );
}
