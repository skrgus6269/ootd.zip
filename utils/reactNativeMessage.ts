import { ImageWithTag } from '@/components/AddItem/TagModal';
import { Dispatch, SetStateAction } from 'react';
import { WebViewMessageEvent } from 'react-native-webview/lib/WebViewTypes';

interface Message {
  type: string;
  payload?: any;
}

export const getReactNativeMessage = (
  setState: Dispatch<SetStateAction<ImageWithTag | undefined | string>>
) => {
  const listener = (event: WebViewMessageEvent) => {
    const parsedData = JSON.parse(event.data);
    if (parsedData?.type === 'OOTD') {
      const banana = parsedData?.payload;
      const imageArray = banana.map((item: any) => {
        return { ootdImage: item };
      });
      setState(imageArray);
    }
    if (parsedData!.type === 'Cloth') {
      const banana = parsedData?.payload;
      setState(banana[0]);
    }
  };

  if (window.ReactNativeWebView) {
    //android
    document.addEventListener('message', listener);

    // //ios
    window.addEventListener('message', listener);
  }
};

export const sendReactNativeMessage = ({ type, payload }: Message) => {
  if (window.ReactNativeWebView) {
    window.ReactNativeWebView.postMessage(JSON.stringify({ type, payload }));
  }
};
