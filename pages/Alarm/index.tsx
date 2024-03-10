import { AlarmApi } from '@/apis/domain/Alarm/AlarmApi';
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

  const { getIsReadAlarm, getNotIsReadAlarm } = AlarmApi();

  useEffect(() => {
    const fetchData = async () => {
      const notIsReadData = await getNotIsReadAlarm();
      const isReadData = await getIsReadAlarm();

      const map = new Map<string, AlarmType[]>();
      const newResult = [] as AlarmType[];

      if (notIsReadData.content as AlarmType[])
        newResult.push(...(notIsReadData.content as AlarmType[]));
      if (isReadData.content as AlarmType[])
        newResult.push(...(isReadData.content as AlarmType[]));

      newResult.forEach((item: AlarmType) => {
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
