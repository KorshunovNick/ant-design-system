import './App.css'
import { Tabs } from 'antd'
import DesignComponents from './DesignComponents/DesignComponents'
import TestTable from './TestTable/TestTable'

function App() {

  return (
    <>
      <Tabs items={[{ key: '1', label: 'Components',children:<DesignComponents/> }, { key: '2', label: 'Table' ,children:<TestTable/>}]}/>
    </>
  )
}

export default App
