import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import S from './style';
import { Caption1 } from '@/components/UI';

interface TextAreaProps {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}

export default function TextArea({ input, setInput }: TextAreaProps) {
  const onChangeTextArea = (e: any) => {
    setInput(e.target.value);
  };

  return (
    <S.Layout>
      <S.TextArea
        onChange={onChangeTextArea}
        maxLength={2000}
        placeholder="Placeholder"
      />
      <S.TextAreaLength>
        <Caption1>{input.length}/2000</Caption1>
      </S.TextAreaLength>
    </S.Layout>
  );
}
