import Modal from '@/components/Modal';
import S from './style';
import { Button1 } from '@/components/UI';
import { Dispatch, SetStateAction, useState } from 'react';

interface ReportModalProps {
  reportModalIsOpen: Boolean;
  setReportModalIsOpen: Dispatch<SetStateAction<Boolean>>;
  setDeclaration: Dispatch<SetStateAction<Boolean>>;
}

export default function ReportModal({
  reportModalIsOpen,
  setReportModalIsOpen,
  setDeclaration,
}: ReportModalProps) {
  const onClickReportButton = () => {
    setReportModalIsOpen(false);
  };

  return (
    <>
      <S.Layout onClick={onClickReportButton}>
        <Modal className="modal" isOpen={reportModalIsOpen} height="10">
          <S.Report>
            <Button1 className="report" onClick={() => setDeclaration(true)}>
              신고
            </Button1>
          </S.Report>
        </Modal>
      </S.Layout>
    </>
  );
}
