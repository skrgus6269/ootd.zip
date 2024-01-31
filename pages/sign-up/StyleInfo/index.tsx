import { Dispatch, SetStateAction } from 'react';
import S from './style';
import GenderInput from '@/components/Domain/SignUp/GenderInput';
import StyleInput from '@/components/Domain/SignUp/StyleInput';

interface BoxProps {
  value: Boolean;
  tag: string;
}

interface StyleInfoProps {
  gender: string;
  setGender: Dispatch<SetStateAction<string>>;
  styleListState: BoxProps[];
  setStyleListState: React.Dispatch<React.SetStateAction<BoxProps[]>>;
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
