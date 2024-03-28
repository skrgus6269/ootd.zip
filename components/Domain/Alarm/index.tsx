import Image from 'next/image';
import S from './style';
import { Body4, Caption2 } from '@/components/UI';
import Avatar from '@/public/images/Avatar.svg';
import { useRouter } from 'next/router';
import { AlarmApi } from '@/apis/domain/Alarm/AlarmApi';

export interface AlarmType {
  id: number;
  profileImage: string | null;
  timeType: string;
  timeStamp: string;
  message: string;
  userName: string;
  content?: string;
  contentImage?: string;
  goUrl: string;
  userId: number;
}

export default function Alarms({
  id,
  profileImage,
  contentImage,
  timeStamp,
  message,
  content,
  userName,
  goUrl,
  userId,
}: AlarmType) {
  const router = useRouter();
  const { readAlarm } = AlarmApi();

  const onClickAlarm = async () => {
    await readAlarm(id);
    router.push(`/${goUrl}`);
  };

  return (
    <S.Layout>
      <S.Left onClick={() => router.push(`/mypage/${userId}`)}>
        {profileImage && (
          <Image
            width={32}
            height={32}
            src={profileImage}
            alt="프로필 이미지"
          />
        )}
        {!profileImage && <Avatar />}
      </S.Left>
      <S.Middle onClick={onClickAlarm}>
        <S.Message>
          <Body4
            onClick={() => router.push(`/mypage/${userId}`)}
            className="userName"
            state="emphasis"
          >
            {userName}
          </Body4>
          <Body4>{message}</Body4>
        </S.Message>
        {content && <Body4 className="content">{content}</Body4>}
        <Caption2 className="timeStamp">{timeStamp}</Caption2>
      </S.Middle>
      <S.Right onClick={onClickAlarm}>
        {contentImage && (
          <Image
            width={32}
            height={32}
            src={contentImage}
            alt="콘텐츠 이미지"
          />
        )}
      </S.Right>
    </S.Layout>
  );
}
