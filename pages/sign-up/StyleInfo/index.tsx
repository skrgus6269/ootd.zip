import { Dispatch, SetStateAction } from 'react';
import S from '@/style/sign-up/StyleInfo/style';
import GenderInput from '@/components/Domain/SignUp/GenderInput';
import StyleInput from '@/components/Domain/SignUp/StyleInput';
import { Style } from '@/pages/AddOOTD';

interface StyleInfoProps {
  gender: Boolean;
  setGender: Dispatch<SetStateAction<Boolean>>;
  setStyleListState: Dispatch<SetStateAction<Style[]>>;
}

export default function StyleInfo({
  gender,
  setGender,
  setStyleListState,
}: StyleInfoProps) {
  return (
    <S.Layout>
      <GenderInput gender={gender} setGender={setGender} />
      <div className="styleInput">
        <StyleInput setStyleListState={setStyleListState} />
      </div>
    </S.Layout>
  );
}
