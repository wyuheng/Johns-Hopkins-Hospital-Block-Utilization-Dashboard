import './App.css';
import Main from './components/Main'
import Header from './components/Header';
import MyComponent from './components/Drawer';
import { useState } from 'react';
import SiderMenu from './components/Sider';


function App() {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [dataOfTheDay, setDataOfTheDay] = useState(null);

  const config = {
    isDrawerVisible: isDrawerVisible,
    setIsDrawerVisible: setIsDrawerVisible,
    dataOfTheDay: dataOfTheDay,
    setDataOfTheDay: setDataOfTheDay
  }

  return (
    <div id = "layer1">
          <Header />
          <MyComponent {...config} />
          <div id = "layer2"> 
              <SiderMenu />
              <Main {...config}/>

          </div>
    </div>
  );
}

export default App;