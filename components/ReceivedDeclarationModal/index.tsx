import Modal from '@/components/Modal';
import S from './style';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineExclamationCircle } from 'react-icons/ai';
import { Button3, Caption1, Headline2, Body3 } from '../UI';
import Toast from '../Toast';

interface ReceivedDeclarationModalProps {
  type: string;
  setReportStatus: Dispatch<SetStateAction<Boolean>>;
  reportStatus: Boolean;
  receivedDeclaration: Boolean;
  setReceivedDeclaration: Dispatch<SetStateAction<Boolean>>;
}

export default function ReceivedDeclarationModal({
  type,
  setReportStatus,
  reportStatus,
  receivedDeclaration,
  setReceivedDeclaration,
}: ReceivedDeclarationModalProps) {
  return (
    receivedDeclaration && (
      <>
        {reportStatus === true ? (
          <Toast
            text="신고가 접수되었습니다."
            setState={setReportStatus}
            state={reportStatus}
          />
        ) : (
          <Toast
            text="이미 접수된 신고입니다."
            setState={setReportStatus}
            state={reportStatus}
          />
        )}
      </>
    )

    // <Modal isOpen={receivedDeclaration} height="55">
    //   <S.Layout>
    //     <S.Header>
    //       <AiOutlineClose
    //         onClick={() => setReceivedDeclaration(false)}
    //         className="close"
    //       />
    //     </S.Header>
    //     <S.Frame>
    //       <AiOutlineExclamationCircle className="infoIcon" />
    //       <Headline2 className="reportTitle">
    //         {reportStatus === true
    //           ? '신고가 접수되었습니다.'
    //           : `이미 신고한 ${type}입니다.`}
    //       </Headline2>
    //       <S.ColorSpan>
    //         <Body3>
    //           추가 조치로 해당 사용자를 차단할 수 있습니다.
    //           <br />
    //           차단하시겠습니까?
    //           <br />
    //           ‘설정 {'>'} 내 계정 {'>'} 차단한 계정’에서 해제할 수 있습니다.
    //           <br />
    //           오른쪽 위 닫기를 누르면 해당 페이지에서 벗어나게 됩니다.
    //         </Body3>
    //       </S.ColorSpan>
    //     </S.Frame>
    //     <S.Button>
    //       <Button3>사용자 차단하기</Button3>
    //     </S.Button>
    //   </S.Layout>
    // </Modal>
  );
}
