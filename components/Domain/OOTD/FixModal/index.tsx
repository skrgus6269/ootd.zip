import S from './style';
import { Body3, Button1, Title1 } from '@/components/UI';
import { Dispatch, SetStateAction, useState } from 'react';
import Alert from '@/components/Alert';
import { useRouter } from 'next/router';
import { OOTDApi } from '@/apis/domain/OOTD/OOTDApi';
import ActionSheet from '@/components/ActionSheet';

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

  const buttons = [
    {
      name: (!isPrivate ? '비' : '') + `공개로 설정`,
      buttonClick: onClickIsPrivateButton,
      color: 'error',
    },
    {
      name: 'ootd 수정',
      buttonClick: onClickIsPrivateButton,
    },
    {
      name: 'ootd 삭제',
      buttonClick: onClickIsPrivateButton,
    },
  ];
  return (
    <>
      <S.Background onClick={() => ''} isOpen={deleteAlertIsOpen} />
      <S.Layout onClick={onClickReportButton}>
        {reportModalIsOpen && <ActionSheet buttons={buttons} />}
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
