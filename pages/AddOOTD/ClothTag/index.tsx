/* eslint-disable @next/next/no-img-element */
import S from './style';
import { Body3 } from '@/components/UI';
import NextButton from '@/components/AddItem/NextButton';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import TagInformation from '@/components/ClothInformation/TagInformation';
import AddTag from '@/components/AddItem/TagModal';
import Carousel from '@/components/Carousel';
import { ImageWithTag } from '@/components/AddItem/TagModal';

interface ClothTagProps {
  setImageAndTag: Dispatch<SetStateAction<ImageWithTag | undefined>>;
  handleStep: (next: string) => void;
}

export default function ClothTag({
  setImageAndTag,
  handleStep,
}: ClothTagProps) {
  const dragRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const [componentWidth, setComponentWidth] = useState(0); //컴포넌트 길이
  const [componentHeight, setComponentHeight] = useState(0); //컴포넌트 높이
  const [addTag, setAddTag] = useState<Boolean>(false); //옷 추가 모달 (열기/닫기)
  const [init, setInit] = useState<Boolean>(false); // 초기 addTag 렌더링 방지
  const [slideIndex, setSlideIndex] = useState<number>(0); //OOTD 슬라이드 인덱스
  const [nextButtonState, setNextButtonState] = useState<Boolean>(false); //다음 버튼 상태

  //컴포넌트 크기 계산
  useEffect(() => {
    if (dragRef.current) {
      const w = dragRef.current.offsetWidth;
      const h = dragRef.current.offsetHeight;
      setComponentWidth(w);
      setComponentHeight(h);
    }
  }, []);

  //이미지, 태그 정보
  const [sampleData, setSampleData] = useState<ImageWithTag>([
    {
      ootdImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
    {
      ootdImage:
        'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    },
    {
      ootdImage:
        'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
    },
    {
      ootdImage:
        'https://image.msscdn.net/images/style/list/l_3_2023080717404200000013917.jpg',
    },
  ]);

  //다음 버튼 활성화 함수
  useEffect(() => {
    const filterdSamplData = sampleData.filter((item) => item.tag);
    if (filterdSamplData.length) setNextButtonState(true);
    else setNextButtonState(false);
  }, [sampleData]);

  //드래그 함수
  const onDrag = (
    index: number,
    ootdIndex: number,
    e: DraggableEvent,
    data: DraggableData
  ) => {
    const updatedElements = [...sampleData];
    updatedElements[ootdIndex].tag[index] = {
      ...updatedElements[ootdIndex].tag[index],
      xRate: String(data.lastX),
      yRate: String(data.lastY),
    };
    console.log(updatedElements[ootdIndex].tag[index]);
    setSampleData(updatedElements);
    e.stopPropagation();
  };

  //옷추가 모달창 열기
  const onClickImage = () => {
    setAddTag(true);
    setInit(true);
  };

  const onClickNextButton = () => {
    if (nextButtonState) {
      handleStep('게시글 작성');
      setImageAndTag(sampleData);
    }
  };

  //이미지 + 태그 컴포넌트
  const ImageTag = () => {
    return (
      <Carousel
        slidesToShow={1}
        infinite={false}
        beforeChange={(_current: number, next: number) => setSlideIndex(next)}
      >
        {sampleData.map((item, ootdIndex) => {
          return (
            <>
              <S.Image ref={dragRef}>
                {item.tag &&
                  item.tag.map((element, index) => {
                    if (componentWidth !== 0 && componentHeight !== 0) {
                      return (
                        <Draggable
                          key={index}
                          bounds=".image"
                          onDrag={(e, data) =>
                            onDrag(index, ootdIndex, e, data)
                          }
                          defaultPosition={{
                            x: Number(element.xRate),
                            y: Number(element.yRate),
                          }}
                        >
                          <div className="sample">
                            <TagInformation
                              clothImage={element.clothImage}
                              caption={element.caption}
                              headline={element.headline}
                              bodyFirst={element.bodyFirst}
                              state={element.state as 'dark' | 'light'}
                            />
                          </div>
                        </Draggable>
                      );
                    }
                  })}
                {/* 이미지 */}
                <img
                  onClick={onClickImage}
                  className="image"
                  ref={imageRef}
                  src={item.ootdImage}
                  alt=""
                />
              </S.Image>
            </>
          );
        })}
      </Carousel>
    );
  };

  return (
    <S.Layout>
      {/* 이미지 + 태그 */}
      {ImageTag()}
      {/* 태그 가이드 */}
      <S.Tag>
        <Body3>원하는 곳을 터치해서 옷 정보를 태그해보세요.</Body3>
      </S.Tag>
      {/* 다음버튼 */}
      <NextButton state={nextButtonState} onClick={onClickNextButton} />
      {/* 태그 모달창 */}
      {init && (
        <AddTag
          setAddTag={setAddTag}
          addTag={addTag}
          setSampleData={setSampleData}
          sampleData={sampleData}
          slideIndex={slideIndex}
        />
      )}
    </S.Layout>
  );
}
