import { Dispatch, SetStateAction, useState } from 'react';
import Input from '../../Input';
import S from './style';
import {
  hasKoreanInitial,
  hasSpecialCharacter,
  isMoreThan12Length,
  isMoreThan2Length,
  badNickname,
} from '@/hooks/regex';
import {
  HELPER_TEXT_KOREAN_INITIAL,
  HELPER_TEXT_VALID,
  HELPER_TEXT_SPECIAL_CHAR,
  HELPER_TEXT_12_LENGTH,
  HELPER_TEXT_NULL,
  NICKNAME_PLACEHODER,
  HELPER_TEXT_2_LENGTH,
  HELPER_TEXT_BAD_NICKNAME,
} from '@/constants/business.constants';

interface InputProps {
  setInput: Dispatch<SetStateAction<string>>;
  setCanUseId: Dispatch<SetStateAction<Boolean>>;
}

export default function IdInput({ setInput, setCanUseId }: InputProps) {
  const [helperText, setHelperText] = useState<string>('입력해주세요');
  const [state, setState] = useState<number>(1);

  const updateHelperText = (text: string, newState: number) => {
    setHelperText(text);
    setState(newState);
  };

  const idInputValidity = (value: string) => {
    if (value.length === 0) {
      updateHelperText(HELPER_TEXT_NULL, 1);
      setCanUseId(false);
    } else if (hasKoreanInitial(value)) {
      updateHelperText(HELPER_TEXT_KOREAN_INITIAL, 2);
      setCanUseId(false);
    } else if (hasSpecialCharacter(value)) {
      updateHelperText(HELPER_TEXT_SPECIAL_CHAR, 2);
      setCanUseId(false);
    } else if (isMoreThan12Length(value)) {
      updateHelperText(HELPER_TEXT_12_LENGTH, 2);
      setCanUseId(false);
    } else if (isMoreThan2Length(value)) {
      updateHelperText(HELPER_TEXT_2_LENGTH, 2);
      setCanUseId(false);
    } else if (badNickname(value)) {
      updateHelperText(HELPER_TEXT_BAD_NICKNAME, 2);
      setCanUseId(false);
    } else {
      if (중복확인()) {
        updateHelperText(HELPER_TEXT_VALID, 3);
        setCanUseId(true);
      }
    }
  };

  const 중복확인 = () => {
    console.log('중복확인');
    return true;
  };

  return (
    <S.Layout>
      <Input>
        <Input.Label size="big">닉네임</Input.Label>
        <Input.Text
          line="underline"
          size="big"
          placeholder={NICKNAME_PLACEHODER}
          validity={idInputValidity}
          onChange={setInput}
        />
        <Input.HelperText state={state}>{helperText}</Input.HelperText>
      </Input>
    </S.Layout>
  );
}

export type { InputProps };
