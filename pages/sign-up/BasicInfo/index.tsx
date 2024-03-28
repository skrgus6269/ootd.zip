import IdInput from '@/components/Domain/SignUp/IdInput';
import S from '@/pageStyle/sign-up/BasicInfo/style';
import { Dispatch, SetStateAction } from 'react';
import AgeInput from '@/components/Domain/SignUp/AgeInput';

interface BasicInfoProps {
  setId: Dispatch<SetStateAction<string>>;
  setAge: Dispatch<SetStateAction<string>>;
  setCanUseId: Dispatch<SetStateAction<Boolean>>;
  id: string;
  age: string;
}

export default function BasicInfo({
  setId,
  setAge,
  setCanUseId,
  id,
  age,
}: BasicInfoProps) {
  return (
    <S.Layout>
      <IdInput id={id} setInput={setId} setCanUseId={setCanUseId} />
      <AgeInput age={age} onChange={setAge} />
    </S.Layout>
  );
}
