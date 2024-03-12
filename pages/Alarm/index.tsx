import { AlarmApi } from '@/apis/domain/Alarm/AlarmApi';
import AppBar from '@/components/Appbar';
import Alarms, { AlarmType } from '@/components/Domain/Alarm';
import AlarmLayout from '@/components/Domain/Alarm/AlarmLayout';
import NoAlarm from '@/components/Domain/Alarm/NoAlarm';
import { Title1 } from '@/components/UI';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

interface FetchedAlarmType {
  timeType: string;
  data: AlarmType[];
}

export default function Alarm() {
  const [notIsReadAlarm, setNotIsReadAlarm] = useState<AlarmType[] | null>(
    null
  );
  const [isReadAlarm, setIsReadAlarm] = useState<FetchedAlarmType[] | null>(
    null
  );

  const router = useRouter();

  const { getIsReadAlarm, getNotIsReadAlarm } = AlarmApi();

  useEffect(() => {
    const fetchData = async () => {
      const { content: notIsReadData } = await getNotIsReadAlarm();
      const { content: isReadData } = await getIsReadAlarm();

      //Map 자료구조를 통한 timeType별 구분
      const map = new Map<string, AlarmType[]>();

      isReadData.forEach((item: AlarmType) => {
        if (map.has(item.timeType)) {
          map.set(item.timeType, [...map.get(item.timeType)!, item]);
        } else {
          map.set(item.timeType, [item]);
        }
      });

      const newIsReadAlarm = [] as FetchedAlarmType[];

      map.forEach((item, key) => {
        newIsReadAlarm.push({
          timeType: key,
          data: item,
        });
      });

      if (notIsReadData.length !== 0) setNotIsReadAlarm(notIsReadData);
      if (newIsReadAlarm.length !== 0) setIsReadAlarm(newIsReadAlarm);
    };
    fetchData();
  }, []);

  return (
    <>
      <AppBar
        leftProps={<AiOutlineArrowLeft onClick={() => router.push('/main')} />}
        middleProps={<Title1>알림함</Title1>}
        rightProps={<></>}
      />
      {!notIsReadAlarm && !isReadAlarm && <NoAlarm />}
      {notIsReadAlarm && (
        <AlarmLayout index={0}>
          <Title1 className="title">읽지 않음</Title1>
          {notIsReadAlarm?.map((item, index) => {
            return (
              <Alarms
                key={index}
                id={item.id}
                profileImage={item.profileImage}
                timeStamp={item.timeStamp}
                message={item.message}
                userName={item.userName}
                timeType={item.timeType}
                contentImage={item.contentImage}
                content={item.content}
                goUrl={item.goUrl}
                userId={item.userId}
              />
            );
          })}
        </AlarmLayout>
      )}
      {isReadAlarm?.map((item, index) => (
        <AlarmLayout index={!Number(notIsReadAlarm) ? index : 1} key={index}>
          <Title1 className="title">{item.timeType}</Title1>
          {item.data.map((innerItem, innerIndex) => (
            <Alarms
              id={innerItem.id}
              key={innerIndex}
              profileImage={innerItem.profileImage}
              timeStamp={innerItem.timeStamp}
              message={innerItem.message}
              userName={innerItem.userName}
              timeType={innerItem.timeType}
              contentImage={innerItem.contentImage}
              content={innerItem.content}
              goUrl={innerItem.goUrl}
              userId={innerItem.userId}
            />
          ))}
        </AlarmLayout>
      ))}
    </>
  );
}
