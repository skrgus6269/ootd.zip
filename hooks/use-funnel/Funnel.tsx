import { FunnelContext } from './context';

type FunnelProps = {
  children: React.ReactNode;
  currentStep: string;
};

export default function Funnel({ children, currentStep }: FunnelProps) {
  return (
    <FunnelContext.Provider value={{ currentStep }}>
      {children}
    </FunnelContext.Provider>
  );
}
