import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import S from '@/pageStyle/cloth/style';
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

import ActionSheet from '@/components/ActionSheet';
import { useRouter } from 'next/router';
import DeleteAlert from '@/components/DetailCloth/DeleteAlert';
import Toast from '@/components/Toast';
import ClothApi from '@/apis/domain/Cloth/ClothApi';
import { useRecoilValue } from 'recoil';
import { userId } from '@/utils/recoil/atom';
import DeclarationModal from '@/components/DeclarationModal';
import ReceivedDeclarationModal from '@/components/ReceivedDeclarationModal';

export interface ClothDataType {
  id: number;
  name: string;
  userName: string;
  brand: { id: number; name: string };
  category: { id: number; categoryName: string; parentCategoryName: string };
  size: { id: number; name: string; lineNo: string };
  colors: { id: number; name: string; colorCode: string }[];
  isPrivate: Boolean;
  memo: string;
  purchaseStore: string;
  purchaseStoreType: string;
  purchaseDate: string;
  imageUrl: string;
  createdAt: string;
  userId: number;
}

const Cloth = () => {
  const router = useRouter();
  const [data, setData] = useState<ClothDataType | null>(null);
  const [reRender, setReRender] = useState(0);
  const { getClothDetail, deleteCloth, patchClothIsPrivate } = ClothApi();

  const [reportModalIsOpen, setReportModalIsOpen] = useState<Boolean>(false);
  const [declaration, setDeclaration] = useState<Boolean>(false); // 신고 Modal
  const [receivedDeclaration, setReceivedDeclaration] =
    useState<Boolean>(false); // 신고 후 차단 Modal
  const [reportStatus, setReportStatus] = useState<Boolean>(false);

  const localUserId = useRecoilValue(userId);

  useEffect(() => {
    const fetchData = async () => {
      if (!router.isReady) return;
      const result = await getClothDetail(Number(router.query.ClothNumber![0]));
      setData(result);
    };
    fetchData();
  }, [router.isReady, reRender]);

  const modifyButton = () => {
    router.push(`/edit-cloth/${router.query.ClothNumber![0]}`);
  };

  const [URLState, setURLState] = useState<Boolean>(false);

  const shareButton = () => {
    console.log('공유');
    // 공유 버튼
    setURLState(false); // 재공유 toast 노출 초기화
    sendReactNativeMessage({ type: 'shareURL' }); // native로 클립보드 복사 처리
    setClickedRight(false); // ActionSheet 숨기기
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      getReactNativeMessage(setURLState);
    }
  }, []);

  const deleteButton = async () => {
    // 삭제 버튼
    setDeleteOpen(true);
  };

  const onClickYesButton = async () => {
    const result = await deleteCloth(Number(router.query.ClothNumber![0]));
    if (result) router.push('/mypage');
  };

  const onClickNoButton = () => {
    setDeleteOpen(false);
  };

  const delclationButton = () => {
    console.log('신고');
    setDeclaration(true);
  };

  const isOpenButton = async () => {
    const payload = { isPrivate: !data!.isPrivate };
    const result = await patchClothIsPrivate(
      Number(router.query.ClothNumber![0]),
      payload
    );
    setReRender(reRender + 1);
    console.log(result);
    setClickedRight(false); // ActionSheet 숨기기
  };

  const myButtons = [
    {
      name: !data?.isPrivate ? '비공개로 변경' : '공개로 변경',
      buttonClick: isOpenButton,
    },
    { name: '게시글 수정', buttonClick: modifyButton },
    // { name: '공유', buttonClick: shareButton },
    { name: '삭제', buttonClick: deleteButton },
  ];

  const otherButtons = [
    // { name: '공유', buttonClick: shareButton },
    { name: '신고', buttonClick: delclationButton },
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
      {data && (
        <DetailClothHeader
          isPublic={!data?.isPrivate}
          bigCategory={data?.category.parentCategoryName!}
          smallCategory={data?.category.categoryName!}
          brand={data?.brand.name!}
          clothByName={data?.name!}
        />
      )}
      <S.Img>{data && <img src={data.imageUrl} />}</S.Img>
      <DetailClothDiscription
        isLink={data?.purchaseStoreType === 'Link'}
        purchasing={data?.purchaseStore!}
        uploadDate={new Date(data?.createdAt!).toLocaleDateString('ko-kr')}
        memo={data?.memo}
      />
      <DetailClothDetailInfo
        color={data?.colors!.map((item) => {
          return { ...item, color: item.colorCode };
        })}
        size={data?.size.name}
        buyDate={data?.purchaseDate}
      />
      {router.isReady && (
        <ClothOOTD clothId={Number(router.query.ClothNumber![0])} />
      )}
      {clickedRight && localUserId === data?.userId && (
        <ActionSheet buttons={myButtons} />
      )}
      {clickedRight && localUserId !== data?.userId && (
        <ActionSheet buttons={otherButtons} />
      )}
      {deleteOpen && (
        <DeleteAlert
          onClickYesButton={onClickYesButton}
          onClickNoButton={onClickNoButton}
        />
      )}
      {declaration && (
        <DeclarationModal
          type="CLOTHES"
          ID={Number(router.query.ClothNumber![0])}
          declaration={declaration}
          setDeclaration={setDeclaration}
          setReceivedDeclaration={setReceivedDeclaration}
          setReportStatus={setReportStatus}
        />
      )}
      {receivedDeclaration && (
        <ReceivedDeclarationModal
          type="게시글"
          reportStatus={reportStatus}
          receivedDeclaration={receivedDeclaration}
          setReceivedDeclaration={setReceivedDeclaration}
        />
      )}
      {URLState && <Toast text="URL이 클립보드에 복사되었습니다." />}
    </>
  );
};

export default Cloth;
