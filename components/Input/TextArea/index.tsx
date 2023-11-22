import { Dispatch, SetStateAction } from 'react';
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

  return (
    <S.Layout>
      <S.TextArea
        onChange={onChangeTextArea}
        maxLength={2000}
        placeholder={placeholder}
      />
      <S.TextAreaLength>
        <Caption1>
          {input.length}/{MAX_TEXTAREA_LENGTH}
        </Caption1>
      </S.TextAreaLength>
    </S.Layout>
  );
}
