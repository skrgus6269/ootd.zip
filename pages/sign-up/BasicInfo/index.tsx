import IdInput from '@/components/Domain/SignUp/IdInput';
import S from '@/style/sign-up/BasicInfo/style';
import { Dispatch, SetStateAction } from 'react';
import AgeInput from '@/components/Domain/SignUp/AgeInput';

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
