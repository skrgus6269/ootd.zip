import Image from 'next/image';
import S from './style';
import CheckBoxTrue from 'public/images/CheckBoxTrue.svg';
import CheckBoxFalse from 'public/images/CheckBoxFalse.svg';
import { Body3, Body4 } from '@/components/UI';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface AgreeBlockProps {
  title: string;
  buttonClick?: () => void;
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
  lastItem?: Boolean;
}

const AgreeBlock = ({
  title,
  buttonClick,
  checked,
  setChecked,
  lastItem,
}: AgreeBlockProps) => {
  const router = useRouter();

  return (
    <S.Layout onClick={buttonClick} state={lastItem}>
      <S.IconSpan>
        {checked ? (
          <CheckBoxTrue
            className="checkBoxIcon"
            onClick={() => setChecked(false)}
          />
        ) : (
          <CheckBoxFalse
            className="checkBoxIcon"
            onClick={() => setChecked(true)}
          />
        )}
      </S.IconSpan>
      <S.TextWrap>
        <Body3 className="title">{title}</Body3>
        <Body3 state="underline" className="content">
          전문확인
        </Body3>
      </S.TextWrap>
    </S.Layout>
  );
};

export default AgreeBlock;
