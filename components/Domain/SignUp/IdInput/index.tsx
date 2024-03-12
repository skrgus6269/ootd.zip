import { Dispatch, SetStateAction, useState } from 'react';
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
  HELPER_TEXT_EXIST_SAMEID,
} from '@/constants/business.constants';
import Input from '@/components/Input';
import { RegisterApi } from '@/apis/domain/Register/RegisterApi';

interface InputProps {
  setInput: Dispatch<SetStateAction<string>>;
  setCanUseId: Dispatch<SetStateAction<Boolean>>;
}

export default function IdInput({ setInput, setCanUseId }: InputProps) {
  const [helperText, setHelperText] = useState<string>('입력해주세요');
  const [state, setState] = useState<number>(1);
  const { checkName } = RegisterApi();

  const updateHelperText = (text: string, newState: number) => {
    setHelperText(text);
    setState(newState);
  };

  const checkNameApi = (name: string) => {
    const fetchCheckName = async () => {
      const result = await checkName(name);

      return result;
    };

    return fetchCheckName();
  };

  const idInputValidity = async (value: string) => {
    if (value !== undefined && value.length === 0) {
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
      if (await checkNameApi(value)) {
        updateHelperText(HELPER_TEXT_VALID, 3);
        setCanUseId(true);
        return;
      }
      updateHelperText(HELPER_TEXT_EXIST_SAMEID, 2);
      setCanUseId(false);
    }
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
        <Input.HelperText className="helperText" state={state}>
          {helperText}
        </Input.HelperText>
      </Input>
    </S.Layout>
  );
}

export type { InputProps };
