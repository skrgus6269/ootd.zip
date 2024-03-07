import Modal from '@/components/Modal';
import S from './style';
import { Body3, Button1, Title1 } from '@/components/UI';
import { Dispatch, SetStateAction, useState } from 'react';
import Alert from '@/components/Alert';
import { useRouter } from 'next/router';
import { OOTDApi } from '@/apis/domain/OOTD/OOTDApi';

interface ReportModalProps {
  reportModalIsOpen: Boolean;
  setReportModalIsOpen: Dispatch<SetStateAction<Boolean>>;
  isPrivate: Boolean;
  setGetPostReRender: Dispatch<SetStateAction<number>>;
  getPostReRender: number;
  setToastOpen: Dispatch<SetStateAction<Boolean>>;
}

export default function FixModal({
  reportModalIsOpen,
  setReportModalIsOpen,
  getPostReRender,
  setGetPostReRender,
  isPrivate,
  setToastOpen,
}: ReportModalProps) {
  const onClickReportButton = () => {
    setReportModalIsOpen(false);
  };

  const router = useRouter();
  const { deleteOOTD, patchOOTDIsPrivate } = OOTDApi();

  const [deleteAlertIsOpen, setDeleteAlertIsOpen] = useState<Boolean>(false);

  const onClickYesButton = async () => {
    await deleteOOTD(Number(router.query!.OOTDNumber![0]));
    setDeleteAlertIsOpen(false);
  };

  const onClickIsPrivateButton = async () => {
    await patchOOTDIsPrivate(Number(router.query!.OOTDNumber![0]), {
      isPrivate: !isPrivate,
    });
    setGetPostReRender(getPostReRender + 1);
    setDeleteAlertIsOpen(false);
    setToastOpen(true);
  };
  return (
    <>
      <S.Background onClick={() => ''} isOpen={deleteAlertIsOpen} />
      <S.Layout onClick={onClickReportButton}>
        <Modal className="modal" isOpen={reportModalIsOpen} height="30">
          <S.Span onClick={onClickIsPrivateButton}>
            <Button1 className="report">
              {!isPrivate && <>비</>}공개로 설정
            </Button1>
          </S.Span>
          <S.Span
            onClick={() =>
              router.push(`/EditOOTD/${Number(router.query!.OOTDNumber![0])}`)
            }
          >
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
