import { Dispatch, SetStateAction } from 'react';
import { WebViewMessageEvent } from 'react-native-webview/lib/WebViewTypes';
import { isJsonString } from './isJsonString';
interface Message {
  type: string;
  payload?: any;
}

export const getReactNativeMessage = (
  setState: Dispatch<SetStateAction<string[]>>
) => {
  const listener = (event: WebViewMessageEvent) => {
    const parsedData = JSON.parse(event.data);
    if (parsedData?.type === 'galleryList') {
      const banana = parsedData?.payload;
      alert(banana);
      setState(banana);
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
