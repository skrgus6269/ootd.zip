import Modal from '@/components/Modal';
import S from './style';
import { Button1 } from '@/components/UI';
import { Dispatch, SetStateAction, useState } from 'react';
import DeclarationModal from '../../../DeclarationModal';

interface ReportModalProps {
  reportModalIsopen: Boolean;
  setReportModalIsopen: Dispatch<SetStateAction<Boolean>>;
  setDeclaration: Dispatch<SetStateAction<Boolean>>;
}

export default function ReportModal({
  reportModalIsopen,
  setReportModalIsopen,
  setDeclaration,
}: ReportModalProps) {
  const onClickReportButton = () => {
    setReportModalIsopen(false);
  };

  return (
    <>
      <S.Layout onClick={onClickReportButton}>
        <Modal className="modal" isOpen={reportModalIsopen} height="10">
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
