import { createContext, useContext } from 'react';

export type FunnelContextProps = {
  currentStep: string;
};

export const FunnelContext = createContext<FunnelContextProps | null>(null);

/**
 * It return Funnel react context
 *
 * @returns {React.Context}
 */
export const useFunnelContext = () => {
  const context = useContext(FunnelContext);
  if (!context)
    throw new Error('use Funnel Context must be used within a Funnel');
  return context;
};
