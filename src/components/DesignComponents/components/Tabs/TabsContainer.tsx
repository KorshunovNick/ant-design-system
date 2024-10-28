import { Tabs } from 'antd';
import { FlexCol } from '../../../../shared/ui/FlexContainers/FlexContainers';

const TabsBlock = () => {
  return (
    <Tabs
      type="card"
      items={new Array(4).fill(null).map((_, i) => {
        const id = String(i + 1);
        return {
          label: `Tab 1`,
          key: id,
          children: ``,
        };
      })}
    />
  );
};

export const TabsContainer = () => {
  return (
    <FlexCol gap={49}>
      <Tabs
        type="line"
        items={new Array(4).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab`,
            key: id,
            children: ``,
          };
        })}
      />
      <TabsBlock />
      <Tabs
        type="line"
        style={{ maxWidth: 800 }}
        items={new Array(20).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab`,
            key: id,
            children: ``,
          };
        })}
      />
    </FlexCol>
  );
};
