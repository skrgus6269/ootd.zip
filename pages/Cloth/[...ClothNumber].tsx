import { Dispatch, SetStateAction, useEffect, useState } from 'react';
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

import ActionSheet from '@/components/ActionSheet';
import { useRouter } from 'next/router';
import DeleteAlert from '@/components/DetailCloth/DeleteAlert';
import Toast from '@/components/Toast';
import ClothApi from '@/apis/domain/Cloth/ClothApi';

interface ClothDataType {
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
}

const Cloth = () => {
  const router = useRouter();
  const [data, setData] = useState<ClothDataType | null>(null);
  const [reRender, setReRender] = useState(0);
  const { getClothDetail, deleteCloth, patchClothIsPrivate } = ClothApi();

  useEffect(() => {
    const fetchData = async () => {
      if (!router.isReady) return;
      const result = await getClothDetail(Number(router.query.ClothNumber![0]));
      setData(result);
    };
    fetchData();
  }, [router.isReady, reRender]);

  const modifyButton = () => {
    router.push(`/EditCloth/${router.query.ClothNumber![0]}`);
  };

  const [URLState, setURLState] = useState<any>(false);

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

  const isOpenButton = async () => {
    const payload = { isPrivate: !data!.isPrivate };
    const result = await patchClothIsPrivate(
      Number(router.query.ClothNumber![0]),
      payload
    );
    setReRender(reRender + 1);
    console.log(result);
  };

  const buttons = [
    {
      name: !data?.isPrivate ? '비공개로 변경' : '공개로 변경',
      buttonClick: isOpenButton,
    },
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
        uploadDate={new Date(data?.createdAt!).toLocaleDateString()}
        memo={data?.memo}
      />
      <DetailClothDetailInfo
        color={data?.colors!.map((item) => {
          return { ...item, color: item.colorCode };
        })}
        size={data?.size.name}
        buyDate={data?.purchaseDate}
      />
      <ClothOOTD data={OOTDData} />
      {clickedRight && <ActionSheet buttons={buttons} />}
      {deleteOpen && (
        <DeleteAlert
          onClickYesButton={onClickYesButton}
          onClickNoButton={onClickNoButton}
        />
      )}
      {URLState && <Toast text="URL이 클립보드에 복사되었습니다." />}
    </>
  );
};

export default Cloth;
