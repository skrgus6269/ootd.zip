import { useFunnelContext } from './context';

type StepProps<T> = {
  name: T;
  children: React.ReactNode;
};

const Steps = <T,>({ children, name }: StepProps<T>) => {
  const { currentStep } = useFunnelContext();
  if (currentStep !== name) return null;
  return <>{children}</>;
};

export default Steps;
