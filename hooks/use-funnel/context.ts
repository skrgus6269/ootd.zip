import { Dispatch, createContext } from 'react';

export type FunnelContextProps = {
  currentStep: string;
};

export const FunnelContext = createContext<FunnelContextProps | null>(null);
