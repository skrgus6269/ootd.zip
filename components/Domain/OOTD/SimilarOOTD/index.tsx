/* eslint-disable @next/next/no-img-element */
import { Title1 } from '@/components/UI';
import S from './style';
import { useRouter } from 'next/router';
import ImageList from '@/components/ImageList';
import { OOTDApi } from '@/apis/domain/OOTD/OOTDApi';
import { useEffect, useState } from 'react';

interface OOTDListType {
  id: number;
  image: string;
}

export default function SimilarOOTD() {
  const router = useRouter();

  const { getSimilarOOTD } = OOTDApi();

  const [data, setData] = useState<OOTDListType[] | null>(null);

  useEffect(() => {
    if (!router.isReady) return;
    const fetchData = async () => {
      const result = await getSimilarOOTD(Number(router.query.OOTDNumber![0]));
      setData(result.content);
    };
    fetchData();
  }, [router.isReady]);

  const onClickSimilarOOTDImage = (index: number) => {
    router.push(`/OOTD/${index}`);
  };

  return (
    <S.Layout>
      {data && data.length > 0 && (
        <S.Title>
          <Title1>비슷한 OOTD</Title1>
        </S.Title>
      )}

      <S.OOTD>
        {data && (
          <ImageList
            onClick={onClickSimilarOOTDImage}
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
