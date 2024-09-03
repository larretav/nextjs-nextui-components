
import React, { ReactNode } from 'react';
import { Tabs, Tab } from '@nextui-org/tabs';

type TabProps = {
  title: string;
  children: ReactNode
}

const CustomTab = ({ title, children }: TabProps) => (
  <Tab title={title}>{children}</Tab>
);

const CustomTabs = ({ children }: Pick<TabProps, 'children'>) => (
  <Tabs>{children}</Tabs>
);

export { CustomTab };
export default CustomTabs;