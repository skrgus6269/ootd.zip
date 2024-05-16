import AppBar from '@/components/Appbar';
import S from '@/pageStyle/blocked-account/style';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { Body3, Button3, Title1 } from '@/components/UI';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import FollowBlock from '@/components/FollowBlock';
import BlockAlert from '@/components/Setting/BlockAlert';
import Toast from '@/components/Toast';
import Background from '@/components/Background';
import { BlockApi } from '@/apis/domain/Block/BlockApi';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import Button from '@/components/Button';

export interface UserBlockListDataType {
  id: number;
  userId: number;
  userName: string;
  profileImage: string;
}

export default function BlockedAccount() {
  const router = useRouter();
  const [alertOpen, setAlertOpen] = useState<Boolean>(false);
  const [userBlockedList, setUserBlockedList] = useState<UserBlockListDataType>(
    {
      id: 0,
      userId: 0,
      userName: '',
      profileImage:
        'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    }
  );

  const { getUserBlock } = BlockApi();

  const fetchDataFunction = async (page: number, size: number) => {
    const data = await getUserBlock({
      page,
      size,
    });
    return data;
  };

  const {
    data: userBlockData,
    isLoading,
    hasNextPage,
    containerRef: ootdRef,
    reset,
  } = useInfiniteScroll({
    fetchDataFunction,
    initialData: [],
    size: 7,
  });

  useEffect(() => {
    console.log(userBlockData);
    // setUserBlockedList(userBlockData)
  }, []);

  const onClickFollow = () => {
    setAlertOpen(true);
  };

  const [follow, setFollow] = useState<Boolean>(false);

  const onClickYesButton = () => {
    console.log('팔로우');
    setAlertOpen(false);
    setFollow(true);
  };

  const onClickNoButton = () => {
    setAlertOpen(false);
  };

  const onClick = () => {
    console.log(1);
  };

  return (
    <>
      <Background isOpen={alertOpen} onClick={() => setAlertOpen(false)} />
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
      <Header text="차단한 계정" />
      {/* {userBlockedList &&
        userBlockedList.map((item, index) => {
          return (
            <S.Layout key={index}>
              <img src={item.profileImage} alt="" />
              <Body3 state="emphasis" className="userName">
                {item.userName}
              </Body3>
                <Button
                  border={false}
                  size="small"
                  backgroundColor="grey_95"
                  color="grey_00"
                  className="followButton"
                  onClick={onClick}
                >
                  <Body3>해제</Body3>
                </Button>

            </S.Layout>
          )
          
        })}

      {alertOpen && (
        <BlockAlert
          onClickYesButton={onClickYesButton}
          onClickNoButton={onClickNoButton}
        />
      )} */}
      {follow && (
        <Toast
          text="@@@님을 팔로우합니다."
          setState={setFollow}
          state={follow}
        />
      )}
    </>
  );
}
