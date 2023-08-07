import { useFunnelContext } from '@/hooks/use-funnel/Funnel';

/**
 * useCurrentStep can use in `<Funnl.Steps>` Components
 */
const useCurrentStep = () => {
  const { currentStep } = useFunnelContext();

  return currentStep;
};

export default useCurrentStep;
