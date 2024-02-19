import Modal from '@/components/Modal';
import S from './style';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Caption1, Title1 } from '../UI';

interface DeclarationModalProps {
  declaration: Boolean;
  setDeclaration: Dispatch<SetStateAction<Boolean>>;
}

export default function DeclarationModal({
  declaration,
  setDeclaration,
}: DeclarationModalProps) {
  return (
    <Modal isOpen={declaration} height="90">
      <S.Layout>
        <S.Header>
          <AiOutlineClose
            onClick={() => setDeclaration(false)}
            className="close"
          />
        </S.Header>
        <S.Frame>
          <Title1>@user님의</Title1>
          <Title1>게시글을 신고합니다.</Title1>
          <Caption1 style={{ color: '#8B8B8B' }}>
            아래에서 신고 사유를 선택해주세요. 회원님의 신고는 익명으로
            처리됩니다.
          </Caption1>
        </S.Frame>
      </S.Layout>
    </Modal>
  );
}
