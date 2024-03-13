import S from './style';
import EditProfile from './EditProfile';
import EditMyInfo from './EditMyInfo';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ActionSheet from '@/components/ActionSheet';
import {
  getReactNativeMessage,
  sendReactNativeMessage,
} from '@/utils/reactNativeMessage';

export default function Closet() {
  const [profileImage, setProfileImage] = useState<string>(
    '/images/basicProfile.svg'
  );
  const [nickName, setNickName] = useState<string>('닉네임');
  const [introduction, setIntroduction] = useState<string>('소개');
  const [height, setHeight] = useState<string>('160');
  const [weight, setWeight] = useState<string>('40');
  const [open, setOpen] = useState<Boolean>(true);

  const [openActionSheet, setOpenActionSheet] = useState<Boolean>(false);

  const takePicture = () => {
    console.log('사진 촬영');
    sendReactNativeMessage({ type: 'TakeProfile' });
    setOpenActionSheet(false); // 액션 시트 자동 종료
  };

  const choosePicture = () => {
    console.log('앨범에서 선택');
    sendReactNativeMessage({ type: 'Profile' });
    setOpenActionSheet(false); // 액션 시트 자동 종료
  };

  const deleteImage = () => {
    console.log('기본 이미지로 변경');
    setProfileImage('/images/basicProfile.svg');
    setOpenActionSheet(false); // 액션 시트 자동 종료
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      getReactNativeMessage(setProfileImage);
    }
  }, []);

  const buttons = [
    // { name: '사진 촬영', buttonClick: takePicture }, // 2차 배포
    { name: '앨범에서 선택', buttonClick: choosePicture },
    { name: '기본 이미지로 변경', buttonClick: deleteImage },
  ];

  return (
    <>
      <S.Background
        isOpen={openActionSheet}
        onClick={() => setOpenActionSheet(false)}
      />
      <S.Layout>
        <EditProfile
          imageURL={profileImage}
          setImageURL={setProfileImage}
          onClickImage={() => setOpenActionSheet(!openActionSheet)}
        />
        <EditMyInfo
          nickName={nickName}
          setNickName={setNickName}
          introduction={introduction}
          setIntroduction={setIntroduction}
          height={height}
          setHeight={setHeight}
          weight={weight}
          setWeight={setWeight}
          open={open}
          setOpen={setOpen}
        />
      </S.Layout>

      {openActionSheet && <ActionSheet buttons={buttons} />}
    </>
  );
}
