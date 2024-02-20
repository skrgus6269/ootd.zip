import { Dispatch, SetStateAction } from 'react';
import S from '@/style/sign-up/StyleInfo/style';
import GenderInput from '@/components/Domain/SignUp/GenderInput';
import StyleInput from '@/components/Domain/SignUp/StyleInput';
import { Style } from '@/pages/AddOOTD';

interface StyleInfoProps {
  gender: Boolean;
  setGender: Dispatch<SetStateAction<Boolean>>;
  styleListState: Style[];
  setStyleListState: React.Dispatch<React.SetStateAction<Style[]>>;
}

export default function StyleInfo({
  gender,
  setGender,
  styleListState,
  setStyleListState,
}: StyleInfoProps) {
  return (
    <S.Layout>
      <GenderInput gender={gender} setGender={setGender} />
      <div className="styleInput">
        <StyleInput
          styleListState={styleListState}
          setStyleListState={setStyleListState}
        />
      </div>
    </S.Layout>
  );
}
