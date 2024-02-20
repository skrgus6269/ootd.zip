import { Title1 } from '@/components/UI';
import S from './style';
import { AiOutlineClose } from 'react-icons/ai';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Input from '@/components/Input';
import { Style } from '@/pages/AddOOTD';
import NextButton from '@/components/NextButton';
import Modal from '@/components/Modal';

interface StyleModalProps {
  setStyleModalIsOpen: Dispatch<SetStateAction<Boolean>>;
  styleModalIsOpen: Boolean;
  setSelectedStyle: Dispatch<SetStateAction<Style[]>>;
  styleInitial?: Style[];
}

export default function StyleModal({
  setStyleModalIsOpen,
  styleModalIsOpen,
  setSelectedStyle,
  styleInitial,
}: StyleModalProps) {
  const [style, setStyle] = useState<Style[]>([]);

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

    if (styleInitial) {
      styleInitial.forEach((style) => {
        const styleIndex = result.findIndex((item) => item.id === style.id);
        if (styleIndex !== -1) {
          result[styleIndex].state = true;
        }
      });
    }
    setStyle(result);
  }, []);

  //스타일 선택 완료 버튼
  const onClickStyleCompleteButton = () => {
    if (style) {
      const selectedStyle = style.filter((item) => item.state);
      setSelectedStyle(selectedStyle);
      setStyleModalIsOpen(false);
    }
  };

  return (
    <>
      <Modal height="80" isOpen={styleModalIsOpen}>
        <S.Layout>
          <S.Label>
            <Title1>스타일 태그</Title1>
            <AiOutlineClose onClick={() => setStyleModalIsOpen(false)} />
          </S.Label>
          <S.CheckBox>
            <Input>
              <Input.CheckBox state={style!} setState={setStyle} />
              <Input.HelperText className="helperText" state={1}>
                최소 1개 이상 선택해주세요
              </Input.HelperText>
            </Input>
          </S.CheckBox>
          <NextButton
            className="nextButton"
            state={style !== null && style.length > 0}
            onClick={onClickStyleCompleteButton}
          >
            선택완료
          </NextButton>
        </S.Layout>
      </Modal>
    </>
  );
}
