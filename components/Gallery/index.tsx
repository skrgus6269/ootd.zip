import fetcher from '@/apis/fetcher';
import {
  getReactNativeMessage,
  sendReactNativeMessage,
} from '@/utils/reactNativeMessage';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Gallery = () => {
  const sampleDataInit = [
    'https://image.msscdn.net/mfile_s01/_shopstaff/list.staff_6515b944a6206.jpg',
  ];
  const [sampleData, setSampleData] = useState<string[]>(sampleDataInit);

  useEffect(() => {
    if (!window.ReactNativeWebView) {
      return;
    }
    sendReactNativeMessage({ type: 'galleryList' });

    if (typeof window !== 'undefined') {
      getReactNativeMessage(setSampleData);
    }
  }, []);

  const click = async () => {
    const { data } = await fetcher.post('api/v1/s3/image', sampleData._parts);
    console.log(data);
    return data;
  };

  const [image, setImage] = useState();

  useEffect(() => {
    console.log(image);
  }, [image]);

  const chagne = async (e: any) => {
    const { data } = await fetcher.post('api/v1/s3/image', e.target.value);
    console.log(data);
    return data;
  };

  return (
    <div>
      <button onClick={click}>zzzzzzzzzzzz</button>
      <input value={image} onChange={chagne} type="file" />
      <>
        <Image
          onClick={click}
          width={50}
          height={50}
          src={sampleData[0]}
          alt="zz"
        />
      </>
    </div>
  );
};

export default Gallery;
