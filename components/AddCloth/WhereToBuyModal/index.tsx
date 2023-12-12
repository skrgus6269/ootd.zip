import { Body3, Headline3 } from '@/components/UI';
import S from './style';
import Input from '@/components/Input';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import Modal from '@/components/Modal';
import NextButton from '@/components/NextButton';
import { ClothWhereBuy } from '@/pages/AddCloth';

interface WhereToBuyModal {
  isOpen: Boolean;
  setIsOpen: Dispatch<SetStateAction<Boolean>>;
  setWhereToBuy: Dispatch<SetStateAction<ClothWhereBuy>>;
}

export default function WhereToBuyModal({
  isOpen,
  setIsOpen,
  setWhereToBuy,
}: WhereToBuyModal) {
  const [linkLetter, setLinkLetter] = useState<string>('');
  const [writeLetter, setWriteLetter] = useState<string>('');

  //true === 링크입력 , false === 직접입력
  const [selectedLetter, setSelectedLetter] = useState<number>(0);

  const linkRef = useRef<any>(null);
  const writeRef = useRef<any>(null);

  useEffect(() => {
    if (selectedLetter === 1) linkRef.current.focus();
    if (selectedLetter === 2) writeRef.current.focus();
  }, [selectedLetter]);

  const onClickLinkLetter = () => {
    setSelectedLetter(1);
    setWriteLetter('');
  };

  const onClickWriteLetter = () => {
    setSelectedLetter(2);
    setLinkLetter('');
  };

  const onClickNextButton = () => {
    setIsOpen(false);
    if (linkLetter.length > 0)
      setWhereToBuy({ letter: linkLetter, type: 'link' });
    if (writeLetter.length > 0)
      setWhereToBuy({ letter: writeLetter, type: 'write' });
  };

  return (
    <Modal height="80%" isOpen={isOpen}>
      <S.Layout>
        <S.Title>
          <Headline3>구매처</Headline3>
        </S.Title>
        <S.Link>
          <Body3>링크로 입력하기</Body3>
          <Input>
            {selectedLetter === 0 || selectedLetter === 1 ? (
              <Input.Text
                inputRef={linkRef}
                size="big"
                placeholder="링크를 붙여넣으세요."
                line="outline"
                type="link"
                onChange={setLinkLetter}
                onClick={onClickLinkLetter}
              />
            ) : (
              <Input.ReadOnly
                state={false}
                result={<Body3>{linkLetter}</Body3>}
                type="link"
                onClick={onClickLinkLetter}
              />
            )}
          </Input>
        </S.Link>
        <S.Write>
          <Body3>직접 입력하기</Body3>
          <Input>
            {selectedLetter === 0 || selectedLetter === 2 ? (
              <Input.Text
                inputRef={writeRef}
                size="big"
                placeholder="선물 받았어요, 래플 당첨 등"
                line="outline"
                onChange={setWriteLetter}
                onClick={onClickWriteLetter}
              />
            ) : (
              <Input.ReadOnly
                state={false}
                result={<Body3>{writeLetter}</Body3>}
                onClick={onClickWriteLetter}
              />
            )}
          </Input>
        </S.Write>
      </S.Layout>
      <NextButton
        onClick={onClickNextButton}
        state={linkLetter.length > 0 || writeLetter.length > 0}
      >
        추가하기
      </NextButton>
    </Modal>
  );
}
