import Input from '@/components/Input';
import S from './style';
import { Style } from '@/pages/AddOOTD';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface StyleInputProps {
  setStyleListState: Dispatch<SetStateAction<Style[]>>;
}
export default function StyleInput({ setStyleListState }: StyleInputProps) {
  const [style, setStyle] = useState<Style[]>([]);

  useEffect(() => {
    console.log(style);
  }, [style]);

  useEffect(() => {
    let result = [
      {
        id: 1,
        name: '미니멀',
        state: false,
      },
      {
        id: 2,
        name: '아메카지',
        state: false,
      },
      {
        id: 3,
        name: '시티보이',
        state: false,
      },
      {
        id: 4,
        name: '캐주얼',
        state: false,
      },
      {
        id: 5,
        name: '스트릿',
        state: false,
      },
      {
        id: 6,
        name: '비즈니스 캐주얼',
        state: false,
      },
      {
        id: 7,
        name: '하이틴',
        state: false,
      },
      {
        id: 8,
        name: '로맨틱',
        state: false,
      },
      {
        id: 9,
        name: '걸리시',
        state: false,
      },
      {
        id: 10,
        name: '스포티',
        state: false,
      },
      {
        id: 11,
        name: '고프코어',
        state: false,
      },
    ];

    setStyle(result);
  }, []);

  return (
    <Input>
      <S.Layout>
        <Input.Label size="big">선호 스타일</Input.Label>
        <div>
          <Input.CheckBox state={style} setState={setStyle}></Input.CheckBox>
          <Input.HelperText className="helperText" state={2}>
            최소 3개 이상 선택해주세요.
          </Input.HelperText>
        </div>
      </S.Layout>
    </Input>
  );
}
