import AppBar from '@/components/Appbar';
import S from '@/pageStyle/edit-mypage/style';
import { AiOutlineArrowLeft, AiOutlineSetting } from 'react-icons/ai';
import { useRouter } from 'next/router';
import Edit from '@/components/Domain/MyPage/Edit';
import React, { FC, useEffect, useState } from 'react';
import { Style } from '../add-ootd';
import { AppLayoutProps } from '@/AppLayout';

interface ComponentWithLayout extends FC {
  Layout?: FC<AppLayoutProps>;
}

const EditMyPage: ComponentWithLayout = () => {
  const router = useRouter();

  const [openActionSheet, setOpenActionSheet] = useState<Boolean>(false);

  return (
    <>
      <S.Background
        isOpen={openActionSheet}
        onClick={() => setOpenActionSheet(false)}
      />
      <S.Layout>
        <AppBar
          leftProps={
            <AiOutlineArrowLeft
              onClick={() => router.back()}
              className="arrowleft"
            />
          }
          middleProps={<></>}
          rightProps={<></>}
        />
        <Edit
          openActionSheet={openActionSheet}
          setOpenActionSheet={setOpenActionSheet}
        />
      </S.Layout>
    </>
  );
};

export default EditMyPage;

export type { ComponentWithLayout, Style };

EditMyPage.Layout = ({ children }: AppLayoutProps) => {
  return <>{children}</>;
};

EditMyPage.Layout.displayName = 'NameLayout';
