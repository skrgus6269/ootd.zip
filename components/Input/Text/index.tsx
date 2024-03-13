import React, { MutableRefObject, useState, useEffect, useRef } from 'react';
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
  state?: Boolean;
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
  state,
}: TextProps) {
  //input의 value

  useEffect(() => {
    if (defaultValue) setLetter(defaultValue);
  }, [defaultValue]);

  const [letter, setLetter] = useState<string>('');
  const [inputFocus, setInputFocus] = useState<Boolean>(false);

  //input 입력 시 letter를 업데이트 하는 함수
  const onChangeInput = (value: string) => {
    setLetter(value);
  };

  const search = () => {
    if (validity) validity(letter && letter.trimEnd());
    onChange(letter);
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
    <S.Layout
      state={state !== undefined ? state : letter.length > 0}
      size={size}
      line={line}
      onClick={onClick}
      ref={inputRef}
    >
      {type === 'Link' && (
        <S.LinkIcon state={letter.length > 0}>
          <AiOutlineLink />
        </S.LinkIcon>
      )}
      <S.SearchInput>
        {type === 'number' && (
          <S.Input
            onFocus={() => setInputFocus(true)}
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
            onFocus={() => setInputFocus(true)}
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
      {inputFocus && letter.length > 0 && (
        <S.CloseIcon
          className="close"
          onClick={() => setLetter('')}
          line={line}
        >
          <AiFillCloseCircle />
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
