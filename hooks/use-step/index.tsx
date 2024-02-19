import { useFunnelContext } from '../use-funnel/context';

/**
 * useCurrentStep can use in `<Funnl.Steps>` Components
 */
const useCurrentStep = () => {
  const { currentStep } = useFunnelContext();

  return currentStep;
};

export default useCurrentStep;
