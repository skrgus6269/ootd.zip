import AppBar from '@/components/Appbar';
import Alarms, { AlarmType } from '@/components/Domain/Alarm';
import AlarmLayout from '@/components/Domain/Alarm/AlarmLayout';
import { Title1 } from '@/components/UI';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

interface FetchedAlarmType {
  timeType: string;
  data: AlarmType[];
}

export default function Alarm() {
  const [data, setData] = useState<FetchedAlarmType[] | null>(null);

  const router = useRouter();

  useEffect(() => {
    const result = [
      {
        profileImage:
          'https://ootdzip.s3.ap-northeast-2.amazonaws.com/e91eede3-0938-401f-a9c0-10facffcba60_2024-03-05.jpg',
        contentImage:
          'https://ootdzip.s3.ap-northeast-2.amazonaws.com/2f89d9d8-f46c-4e6a-aec4-7db995b9e859_2024-03-05.jpg',
        timeStamp: '1분전',
        timeType: '읽음',
        message: '님이 회원님의 ootd에 댓글을 남겼습니다.',
        content: '클린스만 경질 기원 정권찌르기 1일차',
        userName: '히찬',
      },
      {
        profileImage:
          'https://ootdzip.s3.ap-northeast-2.amazonaws.com/e91eede3-0938-401f-a9c0-10facffcba60_2024-03-05.jpg',
        contentImage:
          'https://ootdzip.s3.ap-northeast-2.amazonaws.com/2f89d9d8-f46c-4e6a-aec4-7db995b9e859_2024-03-05.jpg',
        timeStamp: '1분전',
        timeType: '오늘',
        message: '님이 회원님의 ootd를 좋아합니다.',
        userName: 'username',
      },
      {
        profileImage:
          'https://ootdzip.s3.ap-northeast-2.amazonaws.com/e91eede3-0938-401f-a9c0-10facffcba60_2024-03-05.jpg',
        timeStamp: '1분전',
        timeType: '어제',
        message: '님이 회원님을 팔로우합니다.',
        userName: 'nak',
      },
      {
        profileImage:
          'https://ootdzip.s3.ap-northeast-2.amazonaws.com/e91eede3-0938-401f-a9c0-10facffcba60_2024-03-05.jpg',
        timeStamp: '1분전',
        timeType: '작년',
        message: '님이 회원님을 팔로우합니다.',
        userName: 'nak',
      },
      {
        profileImage:
          'https://ootdzip.s3.ap-northeast-2.amazonaws.com/e91eede3-0938-401f-a9c0-10facffcba60_2024-03-05.jpg',
        contentImage:
          'https://ootdzip.s3.ap-northeast-2.amazonaws.com/2f89d9d8-f46c-4e6a-aec4-7db995b9e859_2024-03-05.jpg',
        timeStamp: '1분전',
        timeType: '작년',
        message: '님이 회원님의 ootd에 댓글을 남겼습니다.',
        content:
          '올해 전북현대 유니폼도 구매하셨나요? 풀마킹까지 하려고합니다.',
        userName: '가나다라마바사아자차카타',
      },
      {
        profileImage:
          'https://ootdzip.s3.ap-northeast-2.amazonaws.com/e91eede3-0938-401f-a9c0-10facffcba60_2024-03-05.jpg',
        contentImage:
          'https://ootdzip.s3.ap-northeast-2.amazonaws.com/2f89d9d8-f46c-4e6a-aec4-7db995b9e859_2024-03-05.jpg',
        timeStamp: '1분전',
        timeType: '작년',
        message: '님이 회원님의 ootd에 댓글을 남겼습니다.',
        content:
          '올해 전북현대 유니폼도 구매하셨나요? 풀마킹까지 하려고합니다.',
        userName: '가나다라마바사아자차카타',
      },
      {
        profileImage:
          'https://ootdzip.s3.ap-northeast-2.amazonaws.com/e91eede3-0938-401f-a9c0-10facffcba60_2024-03-05.jpg',
        contentImage:
          'https://ootdzip.s3.ap-northeast-2.amazonaws.com/2f89d9d8-f46c-4e6a-aec4-7db995b9e859_2024-03-05.jpg',
        timeStamp: '1분전',
        timeType: '작년',
        message: '님이 회원님의 ootd에 댓글을 남겼습니다.',
        content:
          '올해 전북현대 유니폼도 구매하셨나요? 풀마킹까지 하려고합니다.',
        userName: '가나다라마바사아자차카타',
      },
    ] as AlarmType[];

    const map = new Map<string, AlarmType[]>();

    result.forEach((item) => {
      if (map.has(item.timeType)) {
        map.set(item.timeType, [...map.get(item.timeType)!, item]);
      } else {
        map.set(item.timeType, [item]);
      }
    });

    const newData = [] as FetchedAlarmType[];

    map.forEach((item, key) => {
      newData.push({
        timeType: key,
        data: item,
      });
    });

    setData(newData);
  }, []);

  return (
    <>
      <AppBar
        leftProps={<AiOutlineArrowLeft onClick={() => router.push('/main')} />}
        middleProps={<Title1>알림함</Title1>}
        rightProps={<></>}
      />
      {data?.map((item, index) => (
        <AlarmLayout index={index} key={index}>
          <Title1 className="title">{item.timeType}</Title1>
          {item.data.map((innerItem, innerIndex) => (
            <Alarms
              id={innerIndex}
              key={innerIndex}
              profileImage={innerItem.profileImage}
              timeStamp={innerItem.timeStamp}
              message={innerItem.message}
              userName={innerItem.userName}
              timeType={innerItem.timeType}
              contentImage={innerItem.contentImage}
              content={innerItem.content}
            />
          ))}
        </AlarmLayout>
      ))}
    </>
  );
}
