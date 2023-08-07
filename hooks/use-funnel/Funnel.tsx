import { useContext, useState } from 'react';
import { FunnelContext } from './context';

/**
 *
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

export const Funnel = ({}) => {};
