import { Switch } from 'antd';
import { FlexCol } from '../shared/FlexContainers/FlexContainers';

const SwitchBox = () => {
  return (
    <div style={{ maxWidth: 44 }}>
      <FlexCol gap={81}>
        <Switch />
        <FlexCol gap={16}>
          <Switch disabled />
          <Switch defaultChecked disabled />
        </FlexCol>
      </FlexCol>
    </div>
  );
};

export default SwitchBox;
