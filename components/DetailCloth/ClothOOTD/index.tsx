import S from './style';
import { Headline1, Body2, Body3 } from '@/components/UI';
import Header from '@/components/Header';
import SubHead from '../SubHead';
import ImageList from '@/components/ImageList';
import { useEffect, useState } from 'react';
import ClothApi from '@/apis/domain/Cloth/ClothApi';
import { useRouter } from 'next/router';

interface OOTDDataProps {
  ootdId: number;
  ootdImage: string;
}

interface ClothOOTDProps {
  clothId: number;
}

export default function ClothOOTD({ clothId }: ClothOOTDProps) {
  const [clicked, setClicked] = useState<string>('new');
  const [data, setData] = useState<OOTDDataProps[]>([]);

  const { getOOTDWithCloth } = ClothApi();

  useEffect(() => {
    const fetchData = async () => {
      const { content } = await getOOTDWithCloth(clothId);
      const newContent = content.map((item: any) => {
        return { clothId: item.id, clothImage: item.image };
      });
      setData(newContent);
    };
    fetchData();
  }, []);

  const router = useRouter();

  return (
    <S.Layout>
      <Header text="이 옷을 활용한 OOTD" />
      <SubHead state={clicked} setState={setClicked} count={data?.length} />
      <S.OOTDLayout>
        <ImageList
          data={data}
          type="column"
          onClick={(index) => router.push(`/OOTD/${index}`)}
        />
      </S.OOTDLayout>
    </S.Layout>
  );
}
