import S from './style';
import EditProfile from './EditProfile';
import EditMyInfo from './EditMyInfo';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ActionSheet from '@/components/ActionSheet';
import {
  getReactNativeMessage,
  sendReactNativeMessage,
} from '@/utils/reactNativeMessage';

import { UserApi } from '@/apis/domain/User/UserApi';
import NextButton from '@/components/NextButton';
import { Button3 } from '@/components/UI';

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

  const { getProfile } = UserApi();

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

  useEffect(() => {
    const ferchData = async () => {
      let result = await getProfile();
      console.log(result);

      setNickName(result.name);
      setIntroduction(result.description);
      setOpen(!result.isBodyPrivate);
      setHeight(result.height);
      setWeight(result.weight);
      setProfileImage(result.profileImage);
    };

    ferchData();
  }, []);

  const onClickNextButton = () => {
    console.log(111);
  };

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

        <S.ButtonWrap>
          <Button3>수정 완료</Button3>
        </S.ButtonWrap>
      </S.Layout>

      {openActionSheet && <ActionSheet buttons={buttons} />}
    </>
  );
}
