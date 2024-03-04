/* eslint-disable @next/next/no-img-element */
import { Title1 } from '@/components/UI';
import S from './style';
import { useRouter } from 'next/router';
import ImageList from '@/components/ImageList';
import { useState } from 'react';
import { useEffect } from 'react';
import { OOTDApi } from '@/apis/domain/OOTD/OOTDApi';

interface UserOOTDProps {
  userId?: number;
  userName?: string;
}

interface OOTDListType {
  id: number;
  image: string;
}

export default function UserOtherOOTD({ userId, userName }: UserOOTDProps) {
  const router = useRouter();
  const { otherOOTD } = OOTDApi();

  useEffect(() => {
    const fetchData = async () => {
      if (!router.isReady || userId === undefined) return;
      try {
        const result = await otherOOTD(
          userId,
          Number(router.query.OOTDNumber![0])
        );
        setData(result.content);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [router.isReady, userId, router.query.OOTDNumber]);

  const [data, setData] = useState<OOTDListType[] | null>(null);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <S.Layout>
      <S.Title>
        <Title1>{userName}님의 다른 OOTD</Title1>
      </S.Title>
      <S.OOTD>
        {data && (
          <ImageList
            onClick={(ootdId: number) => router.push(`/OOTD/${ootdId}`)}
            type="row"
            data={data.map((item) => {
              return { ootdId: item.id, ootdImage: item.image };
            })}
          />
        )}
      </S.OOTD>
    </S.Layout>
  );
}
