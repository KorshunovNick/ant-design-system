import { Tabs } from 'antd';
import DesignComponents from './components/DesignComponents/DesignComponents';
import TestComponent from './components/TestComponent/TestComponent';

function App() {
  return (
    <>
      <Tabs
        style={{ width: '100%', padding: 50 }}
        items={[
          { key: '1', label: 'Components', children: <DesignComponents /> },
          { key: '3', label: 'Test', children: <TestComponent /> },
        ]}
      />
    </>
  );
}

export default App;
