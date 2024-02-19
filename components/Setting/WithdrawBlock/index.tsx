import Image from 'next/image';
import S from './style';
import CheckBoxTrue from 'public/images/checkBoxTrue.png';
import CheckBoxFalse from 'public/images/checkBoxFalse.png';
import { Body3, Body4 } from '@/components/UI';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface WithdrawBlockProps {
  title: string;
  content?: React.ReactNode;
  content2?: React.ReactNode;
  buttonClick?: () => void;
  checked: Boolean;
  setChecked: Dispatch<SetStateAction<Boolean>>;
}

const WithdrawBlock = ({
  title,
  content,
  content2,
  buttonClick,
  checked,
  setChecked,
}: WithdrawBlockProps) => {
  const router = useRouter();

  return (
    <S.Layout onClick={buttonClick}>
      <S.TextWrap>
        <Body3>{title}</Body3>
        <Body4
          style={{ color: '#8B8B8B', display: 'flex', alignItems: 'center' }}
        >
          {content}
        </Body4>
        <Body4
          style={{ color: '#8B8B8B', display: 'flex', alignItems: 'center' }}
        >
          {content2}
        </Body4>
      </S.TextWrap>
      <S.IconSpan>
        {checked ? (
          <Image
            src={CheckBoxTrue}
            alt="CheckBoxTrue"
            onClick={() => setChecked(false)}
          />
        ) : (
          <Image
            src={CheckBoxFalse}
            alt="CheckBoxFalse"
            onClick={() => setChecked(true)}
          />
        )}
      </S.IconSpan>
    </S.Layout>
  );
};

export default WithdrawBlock;