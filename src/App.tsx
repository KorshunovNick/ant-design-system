import './App.css';
import { Tabs } from 'antd';
import DesignComponents from './DesignComponents/DesignComponents';
import TestTable from './TestTable/TestTable';
import TestComponent from './MyTestingComponents/TestComponent';

function App() {
  return (
    <>
      <Tabs
        style={{ width: '100%' }}
        items={[
          { key: '1', label: 'Components', children: <DesignComponents /> },
          { key: '2', label: 'Table', children: <TestTable /> },
          { key: '3', label: 'Test', children: <TestComponent /> },
        ]}
      />
    </>
  );
}

export default App;
