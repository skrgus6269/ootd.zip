import { useFunnel } from '@/hooks/use-funnel';
import S from './style';
import ClosetTabbar from './ClosetTabbar';
import ClosetCloth from './ClosetCloth';
import Profile from './Profile';
import EmptySearch from '@/components/EmptySearch';

interface searchResultProps {
  keywordsValue: string;
}

export default function SearchResult({ keywordsValue }: searchResultProps) {
  const [Funnel, currentStep, handleStep] = useFunnel(['OOTD', 'Profile']);

  console.log(keywordsValue);

  return (
    <>
      <S.Layout>
        <ClosetTabbar handleStep={handleStep} currentStep={currentStep} />
        <Funnel>
          <Funnel.Steps name="OOTD">
            <h1>111</h1>
            {/* {searchClothList.length > 0 ? (
              <ClosetCloth searchClothList={searchClothList} />
            ) : (
              <EmptySearch />
            )} */}
          </Funnel.Steps>
          <Funnel.Steps name="Profile">
            <h1>222</h1>
            {/* {profileList.length > 0 ? (
              <Profile keywords={keywords} />
            ) : (
              <EmptySearch />
            )} */}
          </Funnel.Steps>
        </Funnel>
      </S.Layout>
    </>
  );
}
