import React, { MutableRefObject, useState, useEffect } from 'react';
import { AiFillCloseCircle, AiOutlineLink } from 'react-icons/ai';
import S from './style';
import useDebounce from '@/hooks/useDebouce';
import Body from '@/components/UI/TypoGraphy/Body3';

interface TextProps {
  defaultValue?: string;
  size: 'big' | 'small';
  placeholder?: string;
  unit?: string;
  validity?: (value: string) => void;
  onChange: (value: string) => void;
  type?: 'number' | 'Link';
  border?: Boolean;
  line: 'underline' | 'outline';
  inputRef?: MutableRefObject<null>;
  pressEnter?: () => void;
  onClick?: () => void;
}

export default function Text({
  defaultValue,
  size,
  placeholder,
  unit,
  validity,
  onChange,
  type,
  line,
  inputRef,
  pressEnter,
  onClick,
}: TextProps) {
  //input의 value

  useEffect(() => {
    setLetter(defaultValue!);
  }, [defaultValue]);

  const [letter, setLetter] = useState<string>('');

  //input 입력 시 letter를 업데이트 하는 함수
  const onChangeInput = (value: string) => {
    setLetter(value);
  };

  const search = () => {
    if (validity) validity(letter && letter.trimEnd());
    onChange(letter);
  };

  //delete 아이콘 클릭 시 실행되는 함수
  const onClickCloseIcon = () => {
    setLetter('');
  };

  useDebounce({
    func: () => search(),
    delay: 500,
    deps: [letter],
  });

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      pressEnter ? pressEnter() : '';
    }
  };

  return (
    <S.Layout size={size} line={line} onClick={onClick}>
      {type === 'Link' && (
        <S.LinkIcon state={letter.length > 0}>
          <AiOutlineLink />
        </S.LinkIcon>
      )}
      <S.SearchInput>
        {type === 'number' && (
          <S.Input
            ref={inputRef}
            line={line}
            value={letter}
            onChange={(e) => onChangeInput(e.target.value)}
            placeholder={placeholder}
            type="number"
            pattern="\d*"
          />
        )}
        {type !== 'number' && (
          <S.Input
            ref={inputRef}
            line={line}
            value={letter}
            onChange={(e) => onChangeInput(e.target.value)}
            placeholder={placeholder}
            onKeyDown={onKeyDown}
            type={type}
          />
        )}
      </S.SearchInput>
      {letter && (
        <S.CloseIcon line={line}>
          <AiFillCloseCircle onClick={onClickCloseIcon} />
        </S.CloseIcon>
      )}
      {unit && (
        <S.Unit>
          <Body>{unit}</Body>
        </S.Unit>
      )}
    </S.Layout>
  );
}
