import { ReactNode, useState } from 'react';
import { FunnelContext } from './context';
import { useFunnelContext } from './Funnel';
import Steps from './Step';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';

type FunnelProps = {
  children: React.ReactNode;
};

export type ArrToUnion<T> = T extends ReadonlyArray<infer ITEM> ? ITEM : never;

export function useFunnel<T extends ReadonlyArray<string>>(steps: T) {
  if (steps === null || steps.length === 0 || typeof steps === 'undefined') {
    throw new Error('useFunnel must be used with at least one step');
  }
  const [currentStep, setStep] = useState(steps[0]);

  const handleStep = (next: ArrToUnion<T>) => {
    setStep(next);
  };

  function Funnel({ children }: FunnelProps) {
    return (
      <FunnelContext.Provider value={{ currentStep }}>
        {children}
      </FunnelContext.Provider>
    );
  }

  Funnel.Steps = Steps<ArrToUnion<T>>;

  return [Funnel, currentStep, handleStep] as const;
}
