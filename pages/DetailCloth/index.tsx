import S from '@/style/DetailCloth/style';
import AppBar from '@/components/Appbar';
import { AiOutlineArrowLeft, AiOutlineEllipsis } from 'react-icons/ai';
import DetailClothHeader from '@/components/DetailCloth/DetailClothHeader';
import DetailClothDiscription from '@/components/DetailCloth/DetailClothDiscription';
import DetailClothDetailInfo from '@/components/DetailCloth/DetailClothDetailInfo';
import ClothOOTD from '@/components/DetailCloth/ClothOOTD';

import {
  getReactNativeMessage,
  sendReactNativeMessage,
} from '@/utils/reactNativeMessage';

import { useState } from 'react';
import ActionSheet from '@/components/ActionSheet';
import { useRouter } from 'next/router';
import DeleteAlert from '@/components/DetailCloth/DeleteAlert';

const DetailCloth = () => {
  const router = useRouter();

  const colorSampleData = [
    { color: '#BB193E', name: '버건디' },
    { color: '#D50C0C', name: '레드' },
    { color: '#F66800', name: '오렌지' },
    { color: '#F66800', name: '오렌지' },
    { color: '#F66800', name: '오렌지' },
    { color: '#F66800', name: '오렌지' },
    { color: '#F66800', name: '오렌지' },
    { color: '#F66800', name: '오렌지' },
    { color: '#F66800', name: '오렌지' },
  ];

  const modifyButton = () => {
    console.log('게시글 수정');
    // router.push('/')
    // 게시글 수정 버튼
  };

  const shareButton = () => {
    console.log('공유');
    // 공유 버튼
    const currentURL = window.location.href;
    sendReactNativeMessage({ type: 'shareURL' });
  };

  const deleteButton = () => {
    // 삭제 버튼
    setDeleteOpen(true);
  };

  const onClickYesButton = () => {
    console.log('예');
  };

  const onClickNoButton = () => {
    console.log('아니요');
  };

  const buttons = [
    { name: '게시글 수정', buttonClick: modifyButton },
    { name: '공유', buttonClick: shareButton },
    { name: '삭제', buttonClick: deleteButton },
  ];

  const [clickedRight, setClickedRight] = useState<Boolean>(false);
  const [deleteOpen, setDeleteOpen] = useState<Boolean>(false);

  const onClickAppbarButton = () => {
    setClickedRight(!clickedRight);
  };

  const onClickBackground = () => {
    if (clickedRight) setClickedRight(false);
    if (deleteOpen) setDeleteOpen(false);
  };

  const OOTDData = [
    {
      clothId: 1,
      clothImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
    {
      clothId: 1,
      clothImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
    {
      clothId: 1,
      clothImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
    {
      clothId: 1,
      clothImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
    {
      clothId: 1,
      clothImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
  ];

  return (
    <>
      <AppBar
        leftProps={<AiOutlineArrowLeft />}
        middleProps={<></>}
        rightProps={<AiOutlineEllipsis onClick={onClickAppbarButton} />}
      />
      <S.Background
        isOpen={clickedRight || deleteOpen}
        onClick={onClickBackground}
      />
      <DetailClothHeader
        isPublic={true}
        bigCategory="외투"
        smallCategory="바람막이"
        brand="NIKE"
        clothByName="이름"
      />
      <S.Img>
        <img src="https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg" />
      </S.Img>
      <DetailClothDiscription
        isLink={true}
        purchasing="www.musinsa.com"
        uploadDate="23.12.22"
        memo="안감 없고 얇아서 늦여름~초가을까지는 무난 낙엽 떨어지면 단독으로 입기 어려움"
      />
      <DetailClothDetailInfo
        color={colorSampleData}
        size="FREE"
        buyDate="22 F/W"
      />
      <ClothOOTD count={5} data={OOTDData} />
      {clickedRight && <ActionSheet buttons={buttons} />}
      {deleteOpen && (
        <DeleteAlert
          onClickYesButton={onClickYesButton}
          onClickNoButton={onClickNoButton}
        />
      )}
    </>
  );
};

export default DetailCloth;
