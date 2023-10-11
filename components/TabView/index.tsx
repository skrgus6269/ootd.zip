import TabBar from './TabBar';
import Tab from './Tab';
import Tabs from './Tabs';
import { TabViewProvider } from '@/hooks/use-tabview/context';

interface TabViewProps {
  children: React.ReactNode;
}

export default function TabView({ children }: TabViewProps) {
  return (
    <TabViewProvider>
      <div>{children}</div>
    </TabViewProvider>
  );
}

TabView.TabBar = TabBar;
TabView.Tab = Tab;
TabView.Tabs = Tabs;
