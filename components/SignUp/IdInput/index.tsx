import { Dispatch, SetStateAction, useState } from 'react';
import Input from '../../Input';
import {
  hasKoreanInitial,
  hasSpecialCharacter,
  isMoreThan12Length,
} from '@/hooks/regex';
import {
  HELPER_TEXT_KOREAN_INITIAL,
  HELPER_TEXT_VALID,
  HELPER_TEXT_SPECIAL_CHAR,
  HELPER_TEXT_12_LENGTH,
  HELPER_TEXT_NULL,
  NICKNAME_PLACEHODER,
} from '@/constants/business.constants';

interface InputProps {
  setInput: Dispatch<SetStateAction<string | undefined>>;
}

export default function IdInput({ setInput }: InputProps) {
  const [helperText, setHelperText] = useState<string>('입력해주세요');
  const [state, setState] = useState<number>(1);

  const updateHelperText = (text: string, newState: number) => {
    setHelperText(text);
    setState(newState);
  };

  const idInputValidity = (value: string) => {
    if (value.length === 0) {
      updateHelperText(HELPER_TEXT_NULL, 1);
    } else if (hasKoreanInitial(value)) {
      updateHelperText(HELPER_TEXT_KOREAN_INITIAL, 2);
    } else if (hasSpecialCharacter(value)) {
      updateHelperText(HELPER_TEXT_SPECIAL_CHAR, 2);
    } else if (isMoreThan12Length(value)) {
      updateHelperText(HELPER_TEXT_12_LENGTH, 2);
    } else {
      updateHelperText(HELPER_TEXT_VALID, 3);
    }
  };

  return (
    <Input>
      <Input.Label size="big">닉네임</Input.Label>
      <Input.Text
        size="big"
        placeholder={NICKNAME_PLACEHODER}
        validity={idInputValidity}
        onChange={setInput}
      />
      <Input.HelperText state={state}>{helperText}</Input.HelperText>
    </Input>
  );
}

export type { InputProps };
