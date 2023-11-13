import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import S from './style';
import useDebounce from '@/hooks/useDebouce';
import Body from '@/components/UI/TypoGraphy/Body3';

interface TextProps {
  size: 'big' | 'small';
  placeholder: string;
  unit?: string;
  validity?: (value: string) => void;
  onChange: (value: string) => void;
  type?: string;
}

export default function Text({
  size,
  placeholder,
  unit,
  validity,
  onChange,
  type,
}: TextProps) {
  //input의 value
  const [letter, setLetter] = useState('');

  //input 입력 시 letter를 업데이트 하는 함수
  const onChangeInput = (value: string) => {
    setLetter(value);
  };

  const search = () => {
    if (validity) validity(letter.trimEnd());
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

  return (
    <S.Layout size={size}>
      <S.SearchInput>
        {type === 'number' ? (
          <S.Input
            value={letter}
            onChange={(e) => onChangeInput(e.target.value)}
            placeholder={placeholder}
            type="number"
            pattern="\d*"
          />
        ) : (
          <S.Input
            value={letter}
            onChange={(e) => onChangeInput(e.target.value)}
            placeholder={placeholder}
          />
        )}
      </S.SearchInput>
      {letter && (
        <S.CloseIcon>
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
