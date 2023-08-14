import { ReactNode, useMemo, useState } from 'react';
import Steps from './Step';
import Funnel from './Funnel';

type ArrToUnion<T> = T extends ReadonlyArray<infer ITEM> ? ITEM : never;

export function useFunnel<T extends ReadonlyArray<string>>(steps: T) {
  if (steps === null || steps.length === 0 || typeof steps === 'undefined') {
    throw new Error('useFunnel must be used with at least one step');
  }
  const [currentStep, setStep] = useState(steps[0]);

  const handleStep = (next: ArrToUnion<T>) => {
    setStep(next);
  };

  const FunnelComponent = useMemo(() => {
    return Object.assign(
      ({ children }: { children: ReactNode }) => {
        return <Funnel currentStep={currentStep}>{children}</Funnel>;
      },
      { Steps: Steps<ArrToUnion<T>> }
    );
  }, [currentStep]);

  return [FunnelComponent, currentStep, handleStep] as const;
}
