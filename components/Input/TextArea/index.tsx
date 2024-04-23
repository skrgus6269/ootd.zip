import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useLayoutEffect,
} from 'react';
import S from './style';
import { Caption1 } from '@/components/UI';
import { MAX_TEXTAREA_LENGTH } from '@/constants/business.constants';

interface TextAreaProps {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  placeholder: string;
}

export default function TextArea({
  input,
  setInput,
  placeholder,
}: TextAreaProps) {
  const onChangeTextArea = (e: any) => {
    setInput(e.target.value);
  };
  const [onClickDescriptionState, setOnclickDescriptionState] =
    useState<Boolean>(false);

  return (
    <S.Layout
      onFocus={() => setOnclickDescriptionState(true)}
      onBlur={() => setOnclickDescriptionState(false)}
      onClickDescriptionState={onClickDescriptionState}
    >
      <S.TextArea
        onChange={onChangeTextArea}
        maxLength={2000}
        placeholder={placeholder}
        value={input}
      />
      <S.TextAreaLength>
        <Caption1>
          {input?.length}/{MAX_TEXTAREA_LENGTH}
        </Caption1>
      </S.TextAreaLength>
    </S.Layout>
  );
}
