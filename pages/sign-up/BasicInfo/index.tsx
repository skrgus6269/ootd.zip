import AgeInput from '@/components/SignUp/AgeInput';
import S from './style';
import IdInput from '@/components/SignUp/IdInput';
import { Dispatch, SetStateAction } from 'react';

interface BasicInfoProps {
  setId: Dispatch<SetStateAction<string>>;
  setAge: Dispatch<SetStateAction<string>>;
  setCanUseId: Dispatch<SetStateAction<Boolean>>;
}

export default function BasicInfo({
  setId,
  setAge,
  setCanUseId,
}: BasicInfoProps) {
  return (
    <S.Layout>
      <IdInput setInput={setId} setCanUseId={setCanUseId} />
      <AgeInput onChange={setAge} />
    </S.Layout>
  );
}
