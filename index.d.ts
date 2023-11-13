export {};

declare global {
  interface Window {
    JavaScriptChannel: any;
    myMessage: any;
    ReactNativeWebView: any;
  }
}
