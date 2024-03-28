import { Body3, Title1 } from '@/components/UI';
import S from './style';
import Input from '@/components/Input';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import Modal from '@/components/Modal';
import NextButton from '@/components/NextButton';
import { ClothWhereBuy } from '@/pages/add-cloth';

interface WhereToBuyModal {
  storedClothWhereBuy?: ClothWhereBuy;
  isOpen: Boolean;
  setIsOpen: Dispatch<SetStateAction<Boolean>>;
  setWhereToBuy: Dispatch<SetStateAction<ClothWhereBuy>>;
}

export default function WhereToBuyModal({
  storedClothWhereBuy,
  isOpen,
  setIsOpen,
  setWhereToBuy,
}: WhereToBuyModal) {
  const [linkLetter, setLinkLetter] = useState<string>(
    storedClothWhereBuy && storedClothWhereBuy.type === 'Link'
      ? storedClothWhereBuy.letter
      : ''
  );
  const [writeLetter, setWriteLetter] = useState<string>(
    storedClothWhereBuy && storedClothWhereBuy.type === 'Write'
      ? storedClothWhereBuy.letter
      : ''
  );

  //true === 링크입력 , false === 직접입력
  const [selectedLetter, setSelectedLetter] = useState<number | null>(
    storedClothWhereBuy && storedClothWhereBuy.type === 'Link' ? 1 : 2
  );

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
      setWhereToBuy({ letter: linkLetter, type: 'Link' });
    if (writeLetter.length > 0)
      setWhereToBuy({ letter: writeLetter, type: 'Write' });
  };

  return (
    <Modal height="70" isOpen={isOpen}>
      <S.Layout>
        <S.Title>
          <Title1 className="title">구매처</Title1>
        </S.Title>
        <S.Link>
          <Body3>링크로 입력하기</Body3>
          <Input>
            {selectedLetter === 0 || selectedLetter === 1 ? (
              <Input.Text
                defaultValue={linkLetter}
                inputRef={linkRef}
                size="big"
                placeholder="링크를 붙여넣으세요."
                line="outline"
                type="Link"
                onChange={setLinkLetter}
                onClick={onClickLinkLetter}
              />
            ) : (
              <Input.ReadOnly
                state={false}
                result={<Body3>{linkLetter}</Body3>}
                type="Link"
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
                defaultValue={writeLetter}
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
        <NextButton
          className="nextButton"
          onClick={onClickNextButton}
          state={linkLetter.length > 0 || writeLetter.length > 0}
        >
          추가하기
        </NextButton>
      </S.Layout>
    </Modal>
  );
}
