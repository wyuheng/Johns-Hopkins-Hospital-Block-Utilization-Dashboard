import Main from './Main'
import MyComponent from './Drawer';
import { useState } from 'react';
import SiderMenu from './Sider';

function Home(props) {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [dataOfTheDay, setDataOfTheDay] = useState(null);
  
  const config = {
    isDrawerVisible: isDrawerVisible,
    setIsDrawerVisible: setIsDrawerVisible,
    dataOfTheDay: dataOfTheDay,
    setDataOfTheDay: setDataOfTheDay,
    username: props.username
  }

  return (
      
      (<div id = "layer1">
            
            <SiderMenu />
            <Main {...config}/>
            <MyComponent {...config} />
      </div>)
  );
}

export default Home;