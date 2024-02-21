import Modal from '@/components/Modal';
import S from './style';
import { Body3, Button1, Title1 } from '@/components/UI';
import { Dispatch, SetStateAction, useState } from 'react';
import Alert from '@/components/Alert';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { userId } from '@/utils/recoil/atom';

interface ReportModalProps {
  reportModalIsOpen: Boolean;
  setReportModalIsOpen: Dispatch<SetStateAction<Boolean>>;
  setPublicSetting: Dispatch<SetStateAction<Boolean>>;
}

export default function FixModal({
  reportModalIsOpen,
  setReportModalIsOpen,
  setPublicSetting,
}: ReportModalProps) {
  const onClickReportButton = () => {
    setReportModalIsOpen(false);
  };

  const router = useRouter();
  const myId = useRecoilValue(userId);

  const [deleteAlertIsOpen, setDeleteAlertIsOpen] = useState<Boolean>(false);

  const onClickYesButton = () => {
    setDeleteAlertIsOpen(false);
  };

  return (
    <>
      <S.Background onClick={() => ''} isOpen={deleteAlertIsOpen} />
      <S.Layout onClick={onClickReportButton}>
        <Modal className="modal" isOpen={reportModalIsOpen} height="30">
          <S.Span onClick={() => setPublicSetting(true)}>
            <Button1 className="report">공개로 설정</Button1>
          </S.Span>
          <S.Span onClick={() => router.push(`/EditOOTD/${myId}`)}>
            <Button1 className="report">ootd 수정</Button1>
          </S.Span>
          <S.Span onClick={() => setDeleteAlertIsOpen(true)}>
            <Button1 className="report delete">ootd 삭제</Button1>
          </S.Span>
        </Modal>
        {deleteAlertIsOpen && (
          <Alert
            headline={<Title1>게시글을 삭제하시겠습니까?</Title1>}
            body={<Body3>삭제된 게시글은 다시 복구할 수 없습니다.</Body3>}
            yes="확인"
            no="취소"
            onClickYesButton={onClickYesButton}
            onClickNoButton={() => setDeleteAlertIsOpen(false)}
          />
        )}
      </S.Layout>
    </>
  );
}
